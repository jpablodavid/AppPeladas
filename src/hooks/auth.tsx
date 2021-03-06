import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Alert } from 'react-native';

import { db, auth } from "../configs/firebaseConfig";
import { doc, setDoc, collection, getDoc, getDocs, addDoc, updateDoc,deleteField } from "@firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";

import { nivel } from '../global/Data/itens';

import * as AuthSession from "expo-auth-session";
import { StaffProps } from "../components/Staff";

export type User = {
  id: string;
  name: string;
  nickName: string;
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
  athletes: Array<string>;
  dateCreation: string;
  location: string;
  day: string;
  time: string;
  valorMensal: string;
  valorConvidado: string;
  presidente: StaffProps;
  vicePresidente: StaffProps;
  diretorEsportivo: StaffProps;
  diretorFinanceiro: StaffProps;
  diretorEventos: StaffProps;
  adm: string;
};

export type userGroup = string[];

type AuthContextData = {
  user: User;
  group: Group;
  loading: boolean;
  id: string | undefined;
  email: string;
  excludeAthletes: (idGroup: string, idAthletes?: string) => Promise<void>;
  loadAthletes: (athletes: string[]) => Promise<User[]>;
  addStaff: (name: string, occupation: string, idGroup: string) => Promise<void>;
  loadGroup: (uid: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  createUser: (name: string, email: string, nickName: string, birthday: string, phone: string, position: string, team: string) => Promise<void>;
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

  useEffect(() => {
    isAuth();
  }, []);

  function isAuth() {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setId(currentUser.uid);
        loadUser(currentUser.uid);
        loadGroup("xFMvKV2P2P3kcrl8NFzC");
      }
    });
  }

  async function logIn(email: string, password: string) {
    setLoading(true);
    try {
      const userSign = await signInWithEmailAndPassword(auth, email, password)
      loadUser(userSign.user.uid);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        alert("senha precisa de 6 digitos");
        return;
      }
      if (error.code === "auth/user-not-found") {
        Alert.alert("Usuario n??o encontrado");
        return;
      }
      if (error.code === "auth/ivalid-email") {
        alert("email invalido");
        return;
      } else {
        alert('N??o foi poss??vel Fazer o Login')
      }
      throw new Error('N??o foi poss??vel autenticar');
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

  async function createUser(name: string, email: string, nickName: string, birthday: string, phone: string, position: string, team: string) {
    setLoading(true);
    const userWrite = {
      id: id,
      name: name,
      nickName: nickName,
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
      grupo_Id: '',
      adm: false,
    }as unknown as User;
    setUser(userWrite);
    try {
      await setDoc(doc(db, 'users', id),{...userWrite})
    } catch (error) {
      console.log(error);
      throw new Error('N??o foi poss??vel criar Usuario');
    } finally {
      setLoading(false);
    }
  };

  async function createGroup(nameGrupo: string, date: string, location: string, day: string, time: string) {
    setLoading(true);
    try {
      const groupWrite = {
        name: nameGrupo,
        athletes: [],
        dateCreation: date,
        location: location,
        day: day,
        time: time,
        valorMensal: "",
        valorConvidado: "",
        presidente: {
          id: '',
          userName: '',
          avatar_url: '',
          occupation: '',
        },
        vicePresidente: {
          id: '',
          userName: '',
          avatar_url: '',
          occupation: '',
        },
        diretorEsportivo: {
          id: '',
          userName: '',
          avatar_url: '',
          occupation: '',
        },
        diretorFinanceiro: {
          id: '',
          userName: '',
          avatar_url: '',
          occupation: '',
        },
        diretorEventos: {
          id: '',
          userName: '',
          avatar_url: '',
          occupation: '',
        },
        adm: id,
      } as unknown as Group;

      const group = await addDoc(collection(db, 'groups'),{...groupWrite})
      await updateDoc(doc(db, "users", id), {grupo_id : group.id, adm: true})

      setGroup(groupWrite);
    } catch (error) {
      console.log(error)
      throw new Error('N??o foi poss??vel criar Grupo');
    } finally {
      setLoading(false);
    }
  };

  async function loadGroup(groupUid: string){
    setLoading(true);
    const docRef = doc(db, 'groups', groupUid);
    const docSnap = await getDoc(docRef);
      const groupLoaded = {
        name: docSnap.data()?.name,
        athletes: docSnap.data()?.athletes,
        dateCreation: docSnap.data()?.dateCreation,
        location: docSnap.data()?.location,
        day: docSnap.data()?.day,
        time: docSnap.data()?.time,
        valorMensal: docSnap.data()?.valorMensal,
        valorConvidado: docSnap.data()?.valorConvidado,
        presidente: docSnap.data()?.presidente,
        vicePresidente: docSnap.data()?.presidente,
        diretorEsportivo: docSnap.data()?.presidente,
        diretorFinanceiro: docSnap.data()?.presidente,
        diretorEventos: docSnap.data()?.presidente,
        adm: docSnap.data()?.adm,
      } as Group;
    setGroup(groupLoaded);
    setLoading(false);
  }

  // criar ou adicionar o staff no grupo
  async function addStaff(name: string, occupation: string, idGroup: string){
    let staff = {};
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if(doc.data().name === name){
          staff = {
            id: doc.data()?.id,
            userName: doc.data()?.name,
            avatar_url: doc.data()?.avatar,
            occupation: occupation
          } as StaffProps;
        }
      });
      if(occupation === 'presidente'){
        await updateDoc(doc(db, "groups", idGroup), {presidente: staff});
      }else if(occupation === 'vicePresidente'){
        await updateDoc(doc(db, "groups", idGroup), {vicePresidente: staff});
      }else if(occupation === 'diretorFinanceiro'){
        await updateDoc(doc(db, "groups", idGroup), {diretorFinanceiro: staff});
      }else if(occupation === 'diretorEsportivo'){
        await updateDoc(doc(db, "groups", idGroup), {diretorEsportivo: staff});
      }else{
        await updateDoc(doc(db, "groups", idGroup), {diretorEventos: staff});
      }
    }catch(error){
      console.log(error);
    }
  }

  async function loadUser(uid: string) {
    setLoading(true);
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
      const userLoaded = {
        id: docSnap.data()?.id,
        name: docSnap.data()?.name,
        nickName: docSnap.data()?.nickName,
        email: docSnap.data()?.email,
        birthday: docSnap.data()?.birthday,
        phone: docSnap.data()?.phone,
        avatar: docSnap.data()?.avatar,
        position: docSnap.data()?.position,
        camisa: docSnap.data()?.camisa,
        nivel: docSnap.data()?.nivel,
        xp: docSnap.data()?.xp,
        partidas: docSnap.data()?.partidas,
        gols: docSnap.data()?.gols,
        hattrick: docSnap.data()?.hattrick,
        grupo_id: docSnap.data()?.grupo_Id,
        team: docSnap.data()?.team,
        stars: docSnap.data()?.stars,
        adm: docSnap.data()?.adm,
      } as User;
      setUser(userLoaded);
    setLoading(false);
  };

  // fazer o load dos atletas do grupo
  async function loadAthletes(athletes: string[]){
    let userGroup = [];
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if(athletes.includes(doc.id)){
          userGroup.push(doc.data())
        }
      });
    }catch(error){
      console.log(error);
    }
    // ordenar o array pelo numero da camisa
    userGroup.sort((a , b) => {
      return parseInt(a.camisa) - parseInt(b.camisa)
    });

    return userGroup;
  }

  //excluir o atleta do grupo
  async function excludeAthletes(idGroup: string, idAthletes: string){
    try{
      const docRef = doc(db, 'groups', idGroup);
      const docSnap = await getDoc(docRef);
      const athletes = docSnap.data().athletes;

      const newAthletes = athletes.filter((item: string) => item !== idAthletes);
      await updateDoc(docRef, {
        athletes: newAthletes
      });
    }catch(error){
      console.log(error)
    }
  }

  async function forgotPassword(emailUser: string) {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, emailUser)
      Alert.alert("Redefinir Senha", 'enviamos um e-mail para voc??');
    } catch (error) {
      alert("Esse email n??o ?? um email cadastrado")
    } finally {
      setLoading(false);
    }
  };

  //fun????o para desconectar do firebase
  async function logOut() {
    await signOut(auth);
    setUser({} as User);
    setId("");
    setEmail("");
  }

  return (
    <AuthContext.Provider
      value={{
        id,
        user,
        email,
        loadAthletes,
        excludeAthletes,
        group,
        loading,
        loadGroup,
        logIn,
        logOut,
        signUpWithEmailAndPassword,
        addStaff,
        createUser,
        createGroup,
        forgotPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
