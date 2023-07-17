import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useAuth } from "../../hooks/auth";
import { Ionicons } from "@expo/vector-icons";

import { db } from "../../configs/firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { ListGroup } from "../../components/ListGroup";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export type List={
  name: string;
  id: string;
}


export const JoinGroup = ({navigation}) => {

  const { background } = theme.colors;

  const { user, connectGroup } = useAuth();

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
      connectGroup(idGroup, user.id, user.name, user.camisa);
      navigation.navigate('Group');
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
            <Ionicons name="md-search-sharp" size={26} color={background} />
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

