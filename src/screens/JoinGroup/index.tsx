import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { db } from "../../configs/firebaseConfig";
import { collection, getDocs, getDoc , updateDoc, doc } from "@firebase/firestore";

import { ButtonText } from "../../components/ButtonText";

import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";

import { useAuth } from "../../hooks/auth";
import { ListGroup } from "../../components/ListGroup";

export type List={
  name: string;
  id: string;
}

export const JoinGroup = () => {

  const navigation = useNavigation();

  const { id } = useAuth();

  const [nameGroup, setNameGroup] = useState("");

  const [list, setList] = useState<List[]>([]);

  const [idGroup, setIdGroup ] = useState<string>();

  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		categoryId === idGroup ? setDisable(true) : (setIdGroup(categoryId), setDisable(false));
	}

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSearch() {
    let lista = [];
    let nameBusca = nameGroup.replace(/ /g, "").toUpperCase();
    try{
      const querySnapshot = await getDocs(collection(db, "groups"));
      querySnapshot.forEach((doc) => {
        let name = doc.data().name.replace(/ /g, "").toUpperCase();
        let item = {id: doc.id, name: doc.data().name };
        if(name.includes(nameBusca) || name === nameBusca){
          lista.push(item);
        }
      });
      if(lista.length < 1){
        lista.push({id: "", name: 'Grupo não existe' })
      }
    }catch(error){
      console.log(error);
    }
    setList(lista)
  }

  async function handleConnectGroup() {
    try{
      const docRef = doc(db, 'groups', idGroup);
      const docSnap = await getDoc(docRef);
      const athletes = docSnap.data().athletes;

      if(athletes.includes(id)){
        alert('Você já é membro deste Grupo')
        return
      }else{
        athletes.push(id);

        await updateDoc(docRef, {
          athletes: athletes
        });

        await updateDoc(doc(db, "users", id), {grupo_id : idGroup})
      }
      alert("Você está no Grupo, Agora é so bater aquela pelada");
      navigation.navigate('Home');
    }catch (error){
      console.log(error)
    }finally{
      const listaBranca = []
      setList(listaBranca);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Digite o nome do grupo ao qual você deseja entrar
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setNameGroup}
            value={nameGroup}
          />
          <TouchableOpacity style={styles.lupa} onPress={handleSearch}>
            <Ionicons name="md-search-sharp" size={26} color={theme.colors.background} />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.list}
        >
          <ListGroup
            data={list}
            categorySelected={idGroup}
            setCategory={handleCategorySelect}
            disable={disable}
          />
        </KeyboardAvoidingView>
        <View>
          <Button text={"Entrar no grupo"} onPress={handleConnectGroup} />
        </View>
      </View>
    </Background>
  );
};
