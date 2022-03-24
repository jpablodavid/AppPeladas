import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Alert } from 'react-native';

import firebase from "../configs/firebaseConfig";
import * as Facebook from "expo-facebook";

import { APP_ID } from "../configs/facebookConfigs"

import * as AuthSession from "expo-auth-session";

type User = {
  name: string;
  nick_name: string;
  birthday: string;
  email: string;
  phone: string;
  avatar: string;
  position: string;
  camisa: string;
  nivel: string[];
  xp: string;
  partidas: string;
  gols: string;
  hattrick: string;
  grupo_id: string;
  team: string;
  adm: boolean;
  stars: string;
};

type Group = {
  id: string;
  name: string;
  players: User[];
};

type AuthContextData = {
  user: User;
  loading: boolean;
  id: string | undefined;
  logIn: (email: string, password: string) => Promise<void>;
  loginFacebookAndroid: () => Promise<void>;
  signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signUpFacebookFirebaseWeb: () => Promise<void>;
  createUser: (name: string, birthday: string, nickName: string, phone: string, position: string, team: string) => Promise<void>;
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

  const [id, setId] = useState<string | undefined>();
  const [email, setEmail] =  useState<string | null | undefined>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /*  const subscriber = firebase.auth().onAuthStateChanged(setUser);

      return subscriber; */

  }, []);

  async function logIn(email: string, password: string) {
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (value) => {
          await loadUser(value.user?.uid);
        })
        .catch((error) => {
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
        });
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function signUpWithEmailAndPassword(email: string, password: string) {
    setLoading(true);
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((value) => {
          setId(value.user?.uid);
          setEmail(email);
        })
        .catch((error) => {
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
        }).finally(() => setLoading(false));
  };

  const provider = new firebase.auth.FacebookAuthProvider();

  const signUpFacebookFirebaseWeb = async () => {
    setLoading(true);
    try {
      await firebase
        .auth()
        .signInWithPopup(provider)
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
          alert(error)
          alert('Você já possui um cadastro com essa conta do Facebook');
        })
    } catch {
      throw new Error('Não foi possível Cadastrar com o Facebook');
    } finally{
      setLoading(false);
    }
  };

  const loginFacebookAndroid = async () => {
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
        const data = await response.json();
        console.log(data);
      }else {
        alert("deu ruim");
      }
    } catch ({ message }) {
      throw new Error(`Facebook Login Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  async function createUser(name: string, nickName: string, birthday: string, phone: string, position: string, team: string) {
    let userWrite = {
      name: name,
      nick_name: nickName,
      birthday: birthday,
      email: email,
      phone: phone,
      avatar: "",
      position: position,
      camisa: "",
      nivel: ['Perna de pau', "Café com Leite", "Boleiro", 'Craque'],
      xp: "0",
      partidas: "0",
      gols: "0",
      hattrick: "0",
      stars: "0",
      team: team,
      grupo_Id: null,
      adm: false,
    } as unknown as User;
    try {
      setLoading(true);
      await firebase
        .firestore()
        .collection('users').doc(id)
        .set(userWrite)
      setUser(userWrite);
    } catch {
      throw new Error('Não foi possível criar Usuario');
    } finally {
      setLoading(false);
    }
  };

  async function loadUser(uid: string) {
    await firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .get().then((doc) => {
        if (doc.id === uid) {
          let userLoaded = {
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
        };
      })
    /* await firebase
      .firestore()
      .collection("users")
      .onSnapshot(querySnapshot => {
        querySnapshot.docs.forEach((doc) => {
          if (doc.id === uid) {
            let userLoaded = {
              name: doc.data().name,
              nick_name:  doc.data().nick_name,
              email:  doc.data().email,
              birthday: doc.data().birthday,
              phone: doc.data().phone,
              avatar: doc.data().avatar,
              position: doc.data().position,
              camisa: doc.data().camisa,
              nivel: doc.data().nivel,
              xp: doc.data().xp,
              partidas: doc.data().partidas,
              gols: doc.data().gols,
              hattrick: doc.data().hattrick,
              grupo_id: doc.data().grupo_id,
              stars: doc.data().stars,
              adm: doc.data().adm,
            }as User;
            setUser(userLoaded);
            setGoTo(true);
          };
        });
      }); */
  };

  const forgotPassword = async (emailUser: string) => {
    setLoading(true);
    await firebase
      .auth()
      .sendPasswordResetEmail(emailUser)
      .then(() => Alert.alert("Redefinir Senha", 'enviamos um e-mail para você'))
      .catch((error) => {
        setLoading(false);
        alert("Esse email não é um email cadastrado")
      })
      .finally(() => setLoading(false))
  };

  //função para desconectar do firebase
  const logOut = async () => {
    setUser({} as User);
    await firebase.auth().signOut();
  }

  return (
    <AuthContext.Provider value={{ id, user, loading, logIn, loginFacebookAndroid, signUpWithEmailAndPassword, signUpFacebookFirebaseWeb, createUser, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
