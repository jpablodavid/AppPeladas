import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Alert } from 'react-native';

import { db, auth } from "../configs/firebaseConfig";
import { doc, setDoc, collection, getDoc, getDocs, addDoc, updateDoc, Timestamp, arrayUnion, arrayRemove } from "@firebase/firestore";
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
  camisa: number;
  nivel: string;
  xp: string;
  partidas: string;
  gols: string;
  hattrick: string;
  grupo_id: string;
  team: string;
  adm: boolean;
  stars: string;
  payments: Array<string>;
};

export type athletes = {
  id: string,
  name: string,
  number: number,
}

export type location = {
  adress: string,
  latitude: number,
  longitude: number,
}

export type Group = {
  id: string;
  name: string;
  athletes: Array<athletes>;
  dateCreation: string;
  location: location;
  day: string;
  time: string;
  valorMensal: number;
  valorConvidado: number;
  presidente: StaffProps;
  vicePresidente: StaffProps;
  diretorEsportivo: StaffProps;
  diretorFinanceiro: StaffProps;
  diretorEventos: StaffProps;
  adm: string;
  redesSociais: Array<string>;
};

export type ItemAccount = {
  date: Date,
  valor: number;
  desc: string;
}

export type Account = {
  id: string,
  name: string,
  valorCampo: string,
  valorFesta: string,
  custos: Array<ItemAccount>,
  arrecadacoes: Array<ItemAccount>,
}

export type userGroup = string[];

type AuthContextData = {
  user: User;
  group: Group;
  accounting: Account;
  loading: boolean;
  id: string | undefined;
  email: string;
  excludeAthletes: (idGroup: string, idAthletes: string, name: string, number: number) => Promise<void>;
  loadAthletes: (athletes: athletes[]) => Promise<User[]>;
  addStaff: (name: string, occupation: string, idGroup: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  createUser: (name: string, email: string, nickName: string, birthday: string, phone: string, position: string, team: string) => Promise<void>;
  updateUser: (name: string, nickName: string, birthday: string, phone: string, position: string, team: string) => Promise<void>;
  createPictureAvatar: (photo: string) => Promise<void>;
  createGroup: (nameGrupo: string, date: string, location: string, day: string, time: string, mensal: number, convidado: number, idAdm: string) => Promise<void>;
  loadGroup: (uid: string) => Promise<void>;
  connectGroup: (idGroup: string, id: string, name: string) => Promise<void>;
  updateGroup: (day: string, timeHora: string, timeMin: string, mensal: number, convidado: number, idGroup: string) => Promise<void>;
  addLocation: (adress: string, latitude: number, longitude: number, idGroup: string) => Promise<void>;
  addPayment: (number: number, mes: string) => Promise<void>;
  addValues: (grupoId: string, date: Date, desc: string, tipo: string, valor?: number, campo?: string, festa?: string) => Promise<void>;
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

  const [accounting, setAccounting] = useState<Account>({} as Account);

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
       //loadGroup("OdUKGdrZYGywMZyNoR9o");
        //loadAccounting("OdUKGdrZYGywMZyNoR9o");
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

  async function createUser(name: string, email: string, nickName: string, birthday: string, phone: string, position: string, team: string) {
    setLoading(true);
    const userWrite = {
      id: id,
      name: name,
      nickName: nickName,
      birthday: birthday,
      email: email,
      phone: phone,
      avatar: '',
      position: position,
      camisa: 0,
      nivel: nivel[0],
      xp: "0",
      partidas: "0",
      gols: "0",
      hattrick: "0",
      stars: "0",
      team: team,
      grupo_id: '',
      adm: false,
      payments:[]
    }as unknown as User;
    setUser(userWrite);
    try {
      await setDoc(doc(db, 'users', id),{...userWrite})
    } catch (error) {
      console.log(error);
      throw new Error('Não foi possível criar Usuario');
    } finally {
      setLoading(false);
    }
  };

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
      grupo_id: docSnap.data()?.grupo_id,
      team: docSnap.data()?.team,
      stars: docSnap.data()?.stars,
      adm: docSnap.data()?.adm,
      payments: docSnap.data()?.payments,
    } as User;
    userLoaded.grupo_id && loadGroup(userLoaded.grupo_id);
    setUser(userLoaded);
    setLoading(false);
  };

  // Atualizar Dados do User
  async function updateUser(name: string, nickName: string, birthday: string, phone: string, position: string, team: string){
    try{
      await updateDoc(doc(db, "users", id),
      { name: name,
        nickName: nickName,
        birthday: birthday,
        phone: phone,
        position: position,
        team: team,
      });
      isAuth();
    }catch(error){
      console.log(error);
    }
  }

  //Atualizar Photo do avatar do user
  async function createPictureAvatar(photo: string){
    try{
      await updateDoc(doc(db, "users", id),{ avatar: photo});
    }catch(error){
      console.log(error);
    }
  }

  async function createGroup(nameGrupo: string, date: string, location: string, day: string, time: string, mensal: number, convidado: number, idAdm: string) {
    setLoading(true);
    try {
      const groupWrite = {
        id: '',
        name: nameGrupo,
        athletes: [],
        dateCreation: date,
        location: {
          adress: location,
          latitude: 0,
          longitude: 0,
        },
        day: day,
        time: time,
        valorMensal: mensal,
        valorConvidado: convidado,
        presidente: {
          id: '',
          userName: '',
          avatar_url: '',
        },
        vicePresidente: {
          id: '',
          userName: '',
          avatar_url: '',
        },
        diretorEsportivo: {
          id: '',
          userName: '',
          avatar_url: '',
        },
        diretorFinanceiro: {
          id: '',
          userName: '',
          avatar_url: '',
        },
        diretorEventos: {
          id: '',
          userName: '',
          avatar_url: '',
        },
        adm: idAdm,
        redesSocias:{
          facebook: "",
          instagram: "",
          whatsapp: ""
        }
      } as unknown as Group;

      // cria o grupo no firebase
      const group = await addDoc(collection(db, 'groups'),{...groupWrite});
      // atualiza o grupo para colocar um novo campo com id do grupo criado
      await updateDoc(doc(db, "groups", group.id), {id: group.id});
      // atualiza o usuario colocando o usuario como administrador do grupo
      await updateDoc(doc(db, "users", idAdm), {grupo_id : group.id, adm: true});

      const accountingWrite = {
        id: group.id,
        name: nameGrupo,
        valorCampo: "",
        valorFesta: "",
        custos : [],
        arrecadacoes: []
      } as unknown as Account;

      // criar uma coleção accounting ligada ao grupo
      await setDoc(doc(db, 'accounting', group.id),{...accountingWrite});

      setGroup(groupWrite);
    } catch (error) {
      console.log(error)
      throw new Error('Não foi possível criar Grupo');
    } finally {
      setLoading(false);
    }
  };

  async function loadGroup(groupUid: string){
    setLoading(true);
    const docRef = doc(db, 'groups', groupUid);
    const docSnap = await getDoc(docRef);
      const groupLoaded = {
        id: docSnap.data()?.id,
        name: docSnap.data()?.name,
        athletes: docSnap.data()?.athletes,
        dateCreation: docSnap.data()?.dateCreation,
        location: docSnap.data()?.location,
        day: docSnap.data()?.day,
        time: docSnap.data()?.time,
        valorMensal: docSnap.data()?.valorMensal,
        valorConvidado: docSnap.data()?.valorConvidado,
        presidente: docSnap.data()?.presidente,
        vicePresidente: docSnap.data()?.vicePresidente,
        diretorEsportivo: docSnap.data()?.diretorEsportivo,
        diretorFinanceiro: docSnap.data()?.diretorFinanceiro,
        diretorEventos: docSnap.data()?.diretorEventos,
        adm: docSnap.data()?.adm,
        redesSociais: docSnap.data()?.redesSociais,
      } as Group;
    loadAccounting(groupLoaded.id);
    setGroup(groupLoaded);
    setLoading(false);
  }

  //conectar um usuario ao grupo
  async function connectGroup(idGroup: string, id: string, name: string) {
    try{
      const docRef = doc(db, 'groups', idGroup);
      const docSnap = await getDoc(docRef);
      const athletes = docSnap.data().athletes;

      let camisa: number;
      if (athletes.lenth < 1) {
        camisa = 1;
      }else {
        camisa = athletes.length + 1;
      }

      const athletesWrite = {
        id: id,
        name: name,
        number: camisa,
      }

      athletes.push(athletesWrite);

      await updateDoc(docRef, {
        athletes: athletes
      });

      await updateDoc(doc(db, "users", id), {grupo_id: idGroup, camisa: camisa});

      loadUser(id);

      alert("Você está no Grupo, Agora é so bater aquela pelada");
    }catch (error){
      console.log(error)
    }
  }

  // atualizar dados do grupo, valor mensalidade, valor convidado , dia e hora do jogo
  async function updateGroup(day: string, timeHora: string, timeMin: string, mensal: number, convidado: number, idGroup: string){
    try{
      await updateDoc(doc(db, "groups", idGroup),
      {
        day: day,
        time: timeHora + ":" +timeMin,
        valorMensal: mensal,
        valorConvidado: convidado,
      });
    }catch(error){
      console.log(error);
    }
  }

  // Adcionar ou atualizar localização do campo
  async function addLocation(adress: string, latitude: number, longitude: number, idGroup: string){
    try{
      await updateDoc(doc(db, "groups", idGroup),
      {location: {
        adress: adress,
        latitude: latitude,
        longitude: longitude
      }});
    }catch(error){
      console.log(error);
    }
  }

  // load das informações de contabilidade, custos e arrecadações
  async function loadAccounting(groupUid: string){
    setLoading(true);
    const docRef = doc(db, 'accounting', groupUid);
    const docSnap = await getDoc(docRef);
      const accountingLoaded = {
        id: docSnap.data()?.id,
        name: docSnap.data()?.name,
        valorCampo: docSnap.data()?.valorCampo,
        valorFesta: docSnap.data()?.valorFesta,
        custos: docSnap.data()?.custos,
        arrecadacoes: docSnap.data()?.arrecadacoes,
      } as Account;
    setAccounting(accountingLoaded);
    setLoading(false);
  }

  // criar ou adicionar o staff no grupo
  async function addStaff(name: string, occupation: string, idGroup: string){
    let staff = {};
    let find = false;
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if(doc.data().name === name){
          staff = {
            id: doc.data()?.id,
            userName: doc.data()?.name,
            avatar_url: doc.data()?.avatar,
          } as StaffProps;
          find = true;
        }
      });
      console.log(querySnapshot);
      if (!find) {
        alert("Esse nome de usuario não existe");
        return
      }else{
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
        alert(occupation + " adicionado com sucesso");
      }
    }catch(error){
      console.log(error);
    }
  }

  // fazer o load dos atletas no grupo
  async function loadAthletes(athletes: athletes[]){
    let userGroup = [];
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          athletes.forEach((item) => {
            if(item.id === doc.data().id){
              userGroup.push(doc.data())
            }
        });
      })
    }catch(error){
      console.log(error);
    }
    // ordenar o array pelo numero da camisa
    userGroup.sort((a , b) => {
      return parseInt(a.number) - parseInt(b.number)
    });

    return userGroup;
  }

  //excluir o atleta do grupo
  async function excludeAthletes(idGroup: string, idAthletes: string, name: string, number: number){
    try{
      const docRef = doc(db, 'groups', idGroup);
      const docRefUser = doc(db, 'users', idAthletes);
      const itemRemove = {
        id: idAthletes,
        name: name,
        number: number
      } as athletes;
      await updateDoc(docRef, {
        athletes: arrayRemove(itemRemove)
      });
      await updateDoc(docRefUser, {
        grupo_id: ""
      });
    }catch(error){
      console.log(error);
    }
  }

  async function forgotPassword(emailUser: string) {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, emailUser)
      Alert.alert("Redefinir Senha", 'enviamos um e-mail para você');
    } catch (error) {
      alert("Esse email não é um email cadastrado")
    } finally {
      setLoading(false);
    }
  };

  //função pra adicionar o pagamento da mensalidade no userGroup
  async function addPayment(number: number, mes: string){
    let idWhrite: string;
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if(doc.data().camisa === number){
          idWhrite = doc.data().id;
        }
      })
      await updateDoc(doc(db, "users", idWhrite), {payments : arrayUnion(mes)});
    }catch(error){
      console.log(error);
    }
  }

   // função para adicionar custos e arrecadações
  async function addValues(grupoId: string, date: Date, desc: string, tipo: string, valor?: number, campo?: string, festa?: string) {
    setLoading(true);
    try {
      const item = {
        date: Timestamp.fromDate(date),
        valor: valor,
        desc: desc
      }
      if (tipo === 'custos') {
        await updateDoc(doc(db, "accounting", grupoId), {custos: arrayUnion(item)});
      }else if (tipo === 'arrecadacoes') {
        await updateDoc(doc(db, "accounting", grupoId), {arrecadacoes: arrayUnion(item)});
      }else {
        await updateDoc(doc(db, "accounting", grupoId), {valorCampo: campo, valorFesta: festa});
      }

    } catch (error) {
      console.log(error)
      throw new Error('Não foi possível lançar os valores');
    } finally {
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
    <AuthContext.Provider
      value={{
        id,
        user,
        email,
        loadAthletes,
        excludeAthletes,
        group,
        accounting,
        loading,
        loadGroup,
        connectGroup,
        logIn,
        logOut,
        signUpWithEmailAndPassword,
        addStaff,
        addPayment,
        addValues,
        createUser,
        updateUser,
        createPictureAvatar,
        createGroup,
        updateGroup,
        addLocation,
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
