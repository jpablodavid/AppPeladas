import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

import { Button } from "../../components/Button";
import { ButtonDisable } from "../../components/ButtonDisable";
import { ButtonFacebook } from "../../components/ButtonFacebook";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";


export const SignUp = () => {
  const { primary100 } = theme.colors;

  const {
    loading,
    signUpWithEmailAndPassword,
    signUpFacebookFirebaseWeb,
    signUpFacebookAndroid
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("SignIn");
  }

  async function handleSignUpFacebook() {
    await signUpFacebookAndroid();
  }

  async function signUp(){
    if (email === "" || password === "" || confirm === "") {
      alert("Por favor preencha os campos");
    } else if (password !== confirm) {
      alert("Senhas precisam ser identicas");
    } else {
      await signUpWithEmailAndPassword(email, password);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Criar Conta no PeladasApp</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            icon={<MaterialIcons name="email" size={24} color={primary100} />}
            placeholderText={"email@email.com"}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            icon={<Entypo name="lock-open" size={24} color={primary100} />}
            placeholderText={"senha"}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.inputLastContainer}>
          <Input
            icon={<Entypo name="lock" size={24} color={primary100} />}
            placeholderText={"confirmar senha"}
            onChangeText={(text) => setConfirm(text)}
            value={confirm}
          />
        </View>
        {(email === "" && password === "") || loading ? (
          <ButtonDisable text={"Cadastrar"} />
        ) : (
          <Button text={"Cadastrar"} onPress={signUp} />
        )}
        <View style={styles.lineOrContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>OU</Text>
          <View style={styles.line} />
        </View>
        {loading ? (
          <ActivityIndicator size={36} color={theme.colors.primary10} />
        ) : (
          <>
            <ButtonFacebook
              text={"Cadastrar com Facebook"}
              onPress={() => alert('cadastrar com facebook')}
            />
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Já possui uma conta?</Text>
              <ButtonText onPress={handleSignIn}>
                <Text style={styles.buttonText}>Faça Login</Text>
              </ButtonText>
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
