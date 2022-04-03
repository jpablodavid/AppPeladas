import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { positions, teams } from "../../global/Data/itens";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ButtonText } from "../../components/ButtonText";
import { ButtonDisable } from "../../components/ButtonDisable";
import { InputSelect } from "../../components/InputSelect";


export const CreateAccount = () => {
  const { primary100 } = theme.colors;

  const { user, loading, createUser } = useAuth();

  const [name, setName] = useState(user.name);
  const [birthday, setBirthday] = useState(user.birthday);
  const [nickName, setNickName] = useState(user.nick_name);
  const [phone, setPhone] = useState(user.phone);
  const [position, setPosition] = useState("");
  const [itemPosition, setItemPosition] = useState();
  const [team, setTeam] = useState("");
  const [itemTeam, setItemTeam] = useState();

  const navigation = useNavigation();

  function handleCreateAccount() {
    if (name === '' || birthday === '' || nickName === '' || phone === '' || position === "" || team === "") {
      alert("Por favor preencha todos os campos");
    } else if ( itemPosition ===  0){
      alert("Por favor selecione sua posição e time");
    }
    else {
      createUser(name,nickName, birthday, phone, position, team);
      navigation.navigate('Home');
    }
  }

  function handleGoBack() {
    navigation.navigate("SignUp");
  }

  return (
    <>
      <ButtonText style={styles.goBack} onPress={handleGoBack}>
        <Entypo name="chevron-left" size={24} color="black" />
      </ButtonText>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Logo />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Você está a um passo de começar sua jornada como craque das
              <Text style={styles.title}> Peladas.</Text>
            </Text>
          </View>
          <Text style={styles.informationText}>
            Precisamos de algumas informações:
          </Text>
          <View style={styles.inputContainer}>
            <Input
              icon={
                <FontAwesome5 name="user-alt" size={24} color={primary100} />
              }
              placeholderText={"Nome completo"}
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              icon={
                <FontAwesome5
                  name="calendar-day"
                  size={24}
                  color={primary100}
                />
              }
              placeholderText={"Data de nascimento"}
              onChangeText={(text) => setBirthday(text)}
              value={birthday}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              icon={
                <FontAwesome5 name="user-tie" size={24} color={primary100} />
              }
              placeholderText={"Apelido ou Nome na camisa"}
              onChangeText={(text) => setNickName(text)}
              value={nickName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              icon={
                <FontAwesome5
                  name="phone-square-alt"
                  size={24}
                  color={primary100}
                />
              }
              placeholderText={"Telefone"}
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputSelect
              icon={<FontAwesome5 name="user-tie" size={24} color={primary100}/>}
              placeholder={"escolha sua posição no time"}
              itens={positions}
              selectedValue={position}
              onValueChange={(itemValue, itemPosition) => {
                setPosition(itemValue);
                setItemPosition(itemPosition);
              }}
            />
          </View>
          <View style={styles.inputLastContainer}>
            <InputSelect
              icon={<FontAwesome5 name="user-tie" size={24} color={primary100}/>}
              placeholder={"escolha seu time de coração"}
              itens={teams}
              selectedValue={team}
              onValueChange={(itemValue, itemPosition) => {
                setTeam(itemValue);
                setItemTeam(itemPosition);
              }}
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            {
              loading ?
                (<ActivityIndicator size={36} color={theme.colors.primary10} />)
                :
                (name === '' || birthday === '' || nickName === '' || phone === '')
                  ?
                  <ButtonDisable text={"Criar Conta"} />
                  :
                  <Button text={"Criar Conta"} onPress={handleCreateAccount}/>
            }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
