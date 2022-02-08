import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Button } from "../../components/Button";
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmaSenha, setConfirmaSenha] = useState("");

	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate("SignIn");
	}

	return (
		<View style={styles.container}>
			<Logo />
			<View style={styles.textContainer}>
				<Text style={styles.title}>Criar Conta no PeladasApp</Text>
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"email@email.com"} />
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"senha"} />
			</View>
			<View style={styles.inputLastContainer}>
				<Input placeholderText={"confirmar senha"} />
			</View>
			<Button text={"Cadastrar"} />
			<View style={styles.lineOrContainer}>
				<View style={styles.line} />
				<Text style={styles.or}>OU</Text>
				<View style={styles.line} />
			</View>
			<ButtonGoogle text={"Cadastrar com Google"} />
			<View style={styles.loginContainer}>
				<Text style={styles.loginText}>Já possui uma conta?</Text>
				<ButtonText text={" Faça login"} onPress={handleSignIn} />
			</View>
		</View>
	);
};
