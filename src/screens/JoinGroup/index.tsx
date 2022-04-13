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
import { collection, getDocs , updateDoc, doc, deleteDoc} from "@firebase/firestore";

import { ButtonText } from "../../components/ButtonText";

import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";

import { useAuth } from "../../hooks/auth";
import { ListGroup } from "../../components/ListGroup";
import { Athletes } from "../../components/Athletes";

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

  const userCollectionRef = collection(db, 'users');

  const groupCollectionRef = collection(db, 'groups');

	function handleCategorySelect(categoryId: string) {
		categoryId === idGroup ? setDisable(true) : (setIdGroup(categoryId), setDisable(false));
	}

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSearch() {
    let lista = [];
    const data = await getDocs(groupCollectionRef);
    data.docs.map((doc) => {
      let item = {name: doc.data().name, id: doc.id};
      if(item.name.includes(nameGroup) || item.name === nameGroup){
        lista.push(item);
      }
    });
    setList(lista)
  }

  async function handleConnectGroup() {
    try{
      const groupDoc = doc(db, 'groups', idGroup);
      const addUser = {athletes: [...athletes, id]}
      await updateDoc(groupDoc.athletes, addUser)
      /* await firebase.firestore().doc(`groups/${idGroup}`).get();
      setListAthletes([...group.data().athletes, id]);
      await firebase.firestore().collection('groups').doc(idGroup).update({
        athletes: listAthletes
      }) */
    }catch (error){
      console.log(error)
    }
  }

  async function deletar() {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  }

  return (
    <Background>
      <ButtonText style={styles.goBack} onPress={handleGoBack}>
        <Entypo name="chevron-left" size={24} color="black" />
      </ButtonText>
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
        <TouchableOpacity style={{ padding: 8 }} onPress={handleSearch}>
          <Ionicons name="md-search-sharp" size={24} color={theme.colors.primary100} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ListGroup
					data={list}
					categorySelected={idGroup}
					setCategory={handleCategorySelect}
          disable={disable}
				/>
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <Button text={"Entrar no grupo"} onPress={handleConnectGroup} />
      </View>
    </Background>
  );
};
