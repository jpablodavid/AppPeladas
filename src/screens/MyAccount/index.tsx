import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  } from "react-native";
import { useAuth } from "../../hooks/auth";
import { FontAwesome5 } from "@expo/vector-icons";

import { Input } from "../../components/Input";
import { InputSelect } from "../../components/InputSelect";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";

import { positions, teams } from "../../global/Data/itens";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export const MyAccount = ({navigation}) => {

  const { primary100 } = theme.colors;

  const { user, loading, createUser, email, logOut } = useAuth();

	function handleGoback() {
    navigation.goBack();
	}

  function handleDisconnect() {
    logOut();
  }

  const [name, setName] = useState(user.name);
  const [birthday, setBirthday] = useState(user.birthday);
  const [nickName, setNickName] = useState(user.nickName);
  const [phone, setPhone] = useState(user.phone);
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");

	return (
		<Background>
      <KeyboardAvoidingView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.informationText}>
              Meus Dados:
            </Text>
            <View style={styles.inputContainer}>
              <Input
                icon='user'
                placeholder={user.name}
                onChangeText={setName}
                value={name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                icon="calendar"
                placeholder={user.birthday}
                onChangeText={setBirthday}
                value={birthday}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                icon="user"
                placeholder={user.nickName}
                onChangeText={setNickName}
                value={nickName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                icon="phone"
                placeholder={user.phone}
                onChangeText={setPhone}
                value={phone}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputSelect
                icon={<FontAwesome5 name="user-tie" size={24} color={primary100} />}
                placeholder={user.position}
                itens={positions}
                selectedValue={position}
                onValueChange={(itemValue) => setPosition(String(itemValue))}
              />
            </View>
            <View style={styles.inputLastContainer}>
              <InputSelect
                icon={<FontAwesome5 name="user-tie" size={24} color={primary100} />}
                placeholder={user.team}
                itens={teams}
                selectedValue={team}
                onValueChange={(itemValue) => setTeam(String(itemValue))}
              />
            </View>
            <Button color={theme.colors.tabIcon} text={"Fechar Sessão"} onPress={handleDisconnect} />
          </ScrollView>
        </KeyboardAvoidingView>
		</Background>
	);
};
