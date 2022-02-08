import React, { useState } from "react";
import { View, Text } from "react-native";

import { Logo } from "../../components/Logo";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { ButtonText } from "../../components/ButtonText";


export const SignIn = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const navigation = useNavigation();

	function handleSignUp() {
		navigation.navigate("SingUp");
	}

	return (
		<View style={styles.container}>
			<Logo />
			<View style={styles.textContainer}>
				<Text style={styles.title}>Bem-Vindo ao PeladasApp</Text>
				<Text style={styles.text}>
					Quer organizar suas peladas, participar como jogador, saber seu scout
					e de seus amigos? Você veio ao lugar certo.
				</Text>
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"email@email.com"} />
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"senha"} />
			</View>
			<View style={styles.forgetContainer}>
				<Text style={styles.forgetText}>esqueceu a senha?</Text>
			</View>
			<Button text={"Login"} />
			<View style={styles.lineOrContainer}>
				<View style={styles.line} />
				<Text style={styles.or}>OU</Text>
				<View style={styles.line} />
			</View>
			<ButtonGoogle text={"fazer login com Google"} />
			<View style={styles.cadastrarContainer}>
				<Text style={styles.cadastrarText}>Ainda não possui uma conta?</Text>
				<ButtonText
					text={" Cadastre-se"}
					onPress={handleSignUp}
				/>
			</View>
		</View>
	);
};
