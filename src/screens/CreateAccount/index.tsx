import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, ActivityIndicator, Keyboard } from "react-native";
import { useAuth } from "../../hooks/auth";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { positions, teams } from "../../global/Data/itens";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ButtonText } from "../../components/ButtonText";
import { ButtonDisable } from "../../components/ButtonDisable";
import { InputSelect } from "../../components/InputSelect";
import { Background } from "../../components/Background";
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native";

export const CreateAccount = () => {

  const navigation = useNavigation();

  const { primary100 } = theme.colors;

  const { user, loading, createUser, email } = useAuth();

  const [name, setName] = useState(user.name);
  const [birthday, setBirthday] = useState(user.birthday);
  const [nickName, setNickName] = useState(user.nickName);
  const [phone, setPhone] = useState(user.phone);
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");


  function handleCreateAccount() {
    if (position === "" || team === "") {
      alert("Por favor selecione seu time e posição");
    }
    else {
      createUser(name, email, nickName, birthday, phone, position, team);
      navigation.navigate('Home');
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <ButtonText style={styles.goBack} onPress={handleGoBack}>
        <Ionicons name="md-close" size={24} color="black" />
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
                icon='user'
                placeholder="Nome completo"
                onChangeText={setName}
                value={name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                icon="calendar"
                placeholder={"Data de nascimento"}
                onChangeText={setBirthday}
                value={birthday}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                icon="user"
                placeholder={"Apelido ou Nome na camisa"}
                onChangeText={setNickName}
                value={nickName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                icon="phone"
                placeholder={"Telefone"}
                onChangeText={setPhone}
                value={phone}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputSelect
                icon={<FontAwesome5 name="user-tie" size={24} color={primary100} />}
                placeholder={"escolha sua posição no time"}
                itens={positions}
                selectedValue={position}
                onValueChange={(itemValue) => setPosition(String(itemValue))}
              />
            </View>
            <View style={styles.inputLastContainer}>
              <InputSelect
                icon={<FontAwesome5 name="user-tie" size={24} color={primary100} />}
                placeholder={"escolha seu time de coração"}
                itens={teams}
                selectedValue={team}
                onValueChange={(itemValue) => setTeam(String(itemValue))}
              />
            </View>
            <View style={{ marginBottom: 32 }}>
              {
                loading ?
                  (<ActivityIndicator size={36} color={theme.colors.primary10} />)
                  :
                  (name === undefined || birthday === undefined || nickName === undefined || phone === undefined)
                    ?
                    <ButtonDisable text={"Criar Conta"} />
                    :
                    <Button text={"Criar Conta"}  onPress={handleCreateAccount} />
              }
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
    </Background>
  );
};
