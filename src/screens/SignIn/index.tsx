import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonFacebook } from "../../components/ButtonFacebook";
import { ButtonText } from "../../components/ButtonText";
import { ButtonDisable } from "../../components/ButtonDisable";

import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
  const navigation = useNavigation();

  const { logIn, loading, forgotPassword, loginFacebookAndroid } = useAuth();

  const { primary100 } = theme.colors;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  async function handleSignIn() {
    if (email === '' || password === '') {
      alert("Por favor preencha os campos");
    } else {
      try {
        await logIn(email, password);
      } catch {
        Alert.alert("Não foi possivel o login", 'Verifique e-mail e senha');
      }
    }
  }

  async function handleLoginFacebook() {
    loginFacebookAndroid();

  }

  function handleforgotPassword() {
    if (email) {
      forgotPassword(email);
    } else {
      alert("Campo de email vazio, Você Precisa colocar um email valido");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Bem-Vindo ao PeladasApp</Text>

          <Text style={styles.text}>
            Quer organizar suas peladas, participar como jogador, saber seu
            scout e de seus amigos? Você veio ao lugar certo.
          </Text>
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
            icon={<Entypo name="lock" size={24} color={primary100} />}
            placeholderText={"senha"}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View style={styles.forgetContainer}>
          <ButtonText onPress={handleforgotPassword}>
            <Text style={styles.forgetText}>Esqueceu sua Senha?</Text>
          </ButtonText>
        </View>
        {
          (email === '' && password === '') || loading ? (<ButtonDisable text={"Login"} />)
            : (<Button text={"Login"} onPress={handleSignIn} />)
        }


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
              onPress={() => alert("login facebook")}
              text={"fazer login com Facebook"}
            />
            <View style={styles.cadastrarContainer}>
              <Text style={styles.cadastrarText}>Ainda não possui uma conta?</Text>

              <ButtonText onPress={handleSignUp}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
              </ButtonText>
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
