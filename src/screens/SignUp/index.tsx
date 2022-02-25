import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

import { Button } from "../../components/Button";
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/auth";


export const SignUp = () => {
	const { primary100 } = theme.colors;

	const { loading, signInGoogle, signInInst } = useAuth();

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confirmaSenha, setConfirmaSenha] = useState("");

	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate("SignIn");
	}

	function handleRegister() {
		navigation.navigate("CreateAccount");
	}

	async function handleGoogle() {
		try {
			await signInGoogle();
			navigation.navigate("CreateAccount");
		} catch (error) {
			console.log(JSON.stringify(error));
		}
		
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Logo />
				<View style={styles.textContainer}>
					<Text style={styles.title}>Criar Conta no PeladasApp</Text>
				</View>
				<View style={styles.inputContainer}>
					<Input
						icon={<MaterialIcons name="email" size={24} color={primary100} />}
						placeholderText={"email@email.com"}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Input
						icon={<MaterialIcons name="lock" size={24} color={primary100} />}
						placeholderText={"senha"}
					/>
				</View>
				<View style={styles.inputLastContainer}>
					<Input
						icon={<MaterialIcons name="lock" size={24} color={primary100} />}
						placeholderText={"confirmar senha"}
					/>
				</View>
				<Button text={"Cadastrar"} onPress={handleRegister} />
				<View style={styles.lineOrContainer}>
					<View style={styles.line} />
					<Text style={styles.or}>OU</Text>
					<View style={styles.line} />
				</View>
				<ButtonGoogle text={"Cadastrar com Google"} onPress={handleGoogle} />
				<View style={styles.loginContainer}>
					<Text style={styles.loginText}>Já possui uma conta?</Text>
					<ButtonText onPress={handleSignIn}>
						<Text style={styles.buttonText}>Faça Login</Text>
					</ButtonText>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
