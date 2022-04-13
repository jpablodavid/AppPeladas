import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Alert } from 'react-native';

import { db, auth } from "../configs/firebaseConfig";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail} from "firebase/auth";

import { nivel } from '../global/Data/itens';

import * as Facebook from "expo-facebook";

import { APP_ID } from "../configs/facebookConfigs"

import * as AuthSession from "expo-auth-session";
import { StaffProps } from "../components/Staff";


export type User = {
  name: string;
  nick_name: string;
  birthday: string;
  email: string;
  phone: string;
  avatar: string;
  position: string;
  camisa: string;
  nivel: string;
  xp: string;
  partidas: string;
  gols: string;
  hattrick: string;
  grupo_id: string;
  team: string;
  adm: boolean;
  stars: string;
};

export type Group = {
  name: string;
  athletes: string[];
  dateCreation: string;
  location: string;
  day: string;
  time: string;
  valorMensal: string;
  valorConvidado: string;
  staff: StaffProps[];
  adm: string;
};

type AuthContextData = {
  user: User;
  group: Group;
  loading: boolean;
  id: string | undefined;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  loginFacebookAndroid: () => Promise<void>;
  signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signUpFacebookFirebaseWeb: () => Promise<void>;
  signUpFacebookAndroid: () => Promise<void>;
  createUser: (name: string, birthday: string, nickName: string, phone: string, position: string, team: string) => Promise<void>;
  createGroup: (nameGrupo: string, date: string, location: string, day: string, time: string) => Promise<void>;
  forgotPassword: (emailUser: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthResponse = AuthSession.AuthSessionResult & {
  type: string;
  params: {
    access_token: string;
    code: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [accessToken, setAccessToken] = useState();

  const [user, setUser] = useState<User>({} as User);

  const [group, setGroup] = useState<Group>({} as Group);

  const [id, setId] = useState<string>();

  const [email, setEmail] = useState<string>();

  const [loading, setLoading] = useState(false);

  const userCollectionRef = collection(db, 'users');

  const groupCollectionRef = collection(db, 'groups');

  useEffect(() => {
    isAuth();
  }, []);

  function isAuth() {
    setLoading(true);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setId(currentUser.uid);
        loadUser(currentUser.uid);
      }
    });
    setLoading(false);
  }

  async function logIn(email: string, password: string) {
    setLoading(true);
    try {
      const userSign = await signInWithEmailAndPassword(auth, email, password)
      await loadUser(userSign.user.uid);
    } catch (error){
      if (error.code === "auth/weak-password") {
        alert("senha precisa de 6 digitos");
        return;
      }
      if (error.code === "auth/user-not-found") {
        Alert.alert("Usuario não encontrado");
        return;
      }
      if (error.code === "auth/ivalid-email") {
        alert("email invalido");
        return;
      } else {
        alert('Não foi possível Fazer o Login')
      }
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function signUpWithEmailAndPassword(email: string, password: string) {
    setLoading(true);
    try {
      const userSign = await createUserWithEmailAndPassword(auth, email, password);
      setId(userSign.user.uid);
      setEmail(email);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        alert("senha precisa de 6 digitos");
        return;
      }
      if (error.code === "auth/ivalid-email") {
        alert("email invalido");
        return;
      } else {
        alert(error.code);
        return;
      }
    } finally {
      setLoading(false)
    }
  }

    async function signUpFacebookFirebaseWeb() {
      setLoading(true);
      try {
        await firebase
          .auth()
          .signInWithRedirect(provider)
          .then((value) => {
            const userFacebook = value.additionalUserInfo?.profile;
            setId(value.user?.uid);
            setAccessToken(value.credential?.accessToken);
            let userFirebase = {
              name: userFacebook?.name,
              nick_name: userFacebook?.first_name,
              birthday: userFacebook?.birthday,
              email: userFacebook?.email,
              phone: value.user?.phoneNumber,
              avatar: userFacebook?.picture.data.URL,
              position: "",
              camisa: "0",
              nivel: ['Perna de pau', "Café com Leite", "Boleiro", 'Craque'],
              xp: "0",
              partidas: "0",
              gols: "0",
              hattrick: "0",
              grupo_id: null,
              team: "",
              adm: false,
              stars: "0",
            } as unknown as User;
            setUser(userFirebase);
          })
          .catch((error) => {
            alert(error.message);
          })
      } catch {
        throw new Error('Não foi possível Cadastrar com o Facebook');
      } finally {
        setLoading(false);
      }
    };

    async function loginFacebookAndroid() {
      try {
        setLoading(true);
        await Facebook.initializeAsync(APP_ID);
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
        if (type === "success") {
          alert("sucess")
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
          );
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          firebase.auth().signInWithCredential(credential).then(async user => {
            console.log(user.user.uid);
            await loadUser(user.user.uid);
          }).catch(error => {
            alert(error.message);
          })
          const data = await response.json();
          //console.log(data);
        } else {
          alert("deu ruim");
        }
      } catch ({ message }) {
        throw new Error(`Facebook Login Error: ${message}`);
      } finally {
        setLoading(false);
      }
    };

    async function signUpFacebookAndroid() {
      setLoading(true);
      try {
        await Facebook.initializeAsync(APP_ID);
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
        if (type === "success") {
          alert("sucess")
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          await firebase.auth().signInWithCredential(credential).then((value) => {
            const userFacebook = value.additionalUserInfo?.profile;
            setId(value.user?.uid);
            setAccessToken(value.credential?.accessToken);
            let userFirebase = {
              name: userFacebook?.name,
              nick_name: userFacebook?.first_name,
              birthday: userFacebook?.birthday,
              email: userFacebook?.email,
              phone: value.user?.phoneNumber,
              avatar: userFacebook?.picture.data.URL,
              position: "",
              camisa: "0",
              nivel: ['Perna de pau', "Café com Leite", "Boleiro", 'Craque'],
              xp: "0",
              partidas: "0",
              gols: "0",
              hattrick: "0",
              grupo_id: null,
              team: "",
              adm: false,
              stars: "0",
            } as unknown as User;
            setUser(userFirebase);
          }).catch((error) => {
            alert(error.message);
          })
        } else {
          alert("deu ruim");
        }
      } catch {
        throw new Error('Não foi possível Cadastrar com o Facebook');
      } finally {
        setLoading(false);
      }
    };

    async function createUser(name: string, nickName: string, birthday: string, phone: string, position: string, team: string) {
      setLoading(true);
      try {
        const userWrite = {
          name: name,
          nick_name: nickName,
          birthday: birthday,
          email: email,
          phone: phone,
          avatar: "",
          position: position,
          camisa: "",
          nivel: nivel[0],
          xp: "0",
          partidas: "0",
          gols: "0",
          hattrick: "0",
          stars: "0",
          team: team,
          grupo_Id: null,
          adm: false,
        } as unknown as User;
        await addDoc(userCollectionRef, { userWrite });
        setUser(userWrite);
      } catch (error) {
        console.log(error);
        throw new Error('Não foi possível criar Usuario');
      } finally {
        setLoading(false);
      }
    };

    async function createGroup(nameGrupo: string, date: string, location: string, day: string, time: string) {
      setLoading(true);
      try {
        const group = {
          name: nameGrupo,
          athletes: [],
          dateCreation: date,
          location: location,
          day: day,
          time: time,
          valorMensal: "",
          valorConvidado: "",
          adm: id,
        } as unknown as Group;
        await addDoc(groupCollectionRef, { group })
        setGroup(group);
      } catch (error) {
        console.log(error)
        throw new Error('Não foi possível criar Grupo');
      } finally {
        setLoading(false);
      }
    };

    async function loadUser(uid: string) {
      setLoading(true);
      const data = await getDocs(userCollectionRef);
      data.docs.map((doc) => {
        if (doc.id === uid) {
          const userLoaded = {
            name: doc.data()?.name,
            nick_name: doc.data()?.nick_name,
            email: doc.data()?.email,
            birthday: doc.data()?.birthday,
            phone: doc.data()?.phone,
            avatar: doc.data()?.avatar,
            position: doc.data()?.position,
            camisa: doc.data()?.camisa,
            nivel: doc.data()?.nivel,
            xp: doc.data()?.xp,
            partidas: doc.data()?.partidas,
            gols: doc.data()?.gols,
            hattrick: doc.data()?.hattrick,
            grupo_id: doc.data()?.grupo_id,
            stars: doc.data()?.stars,
            adm: doc.data()?.adm,
          } as User;
          setUser(userLoaded);
        }
      });
      setLoading(false);
    };

    async function forgotPassword(emailUser: string) {
      setLoading(true);
      try{
        await sendPasswordResetEmail(auth, emailUser)
        Alert.alert("Redefinir Senha", 'enviamos um e-mail para você');
      }catch(error){
        alert("Esse email não é um email cadastrado")
      }finally{
        setLoading(false);
      }
    };

    //função para desconectar do firebase
    async function logOut() {
      await signOut(auth);
      setUser({} as User);
      setId("");
      setEmail("");
    }

    return (
      <AuthContext.Provider value={{ id, user, group, loading, logIn, logOut, loginFacebookAndroid, signUpWithEmailAndPassword, signUpFacebookFirebaseWeb, signUpFacebookAndroid, createUser, createGroup, forgotPassword }}>
        {children}
      </AuthContext.Provider>
    );
  }

  function useAuth() {
    const context = useContext(AuthContext);

    return context;
  }

  export { AuthProvider, useAuth };
