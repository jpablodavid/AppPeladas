import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	View,
	Text,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
	Alert,
	ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonFacebook } from "../../components/ButtonFacebook";
import { ButtonText } from "../../components/ButtonText";

import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
	const navigation = useNavigation();

	const { loading } = useAuth();

	const { primary100 } = theme.colors;

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	function handleSignUp() {
		navigation.navigate("SignUp");
	}

	// async function handleSignIn(){
	// 	try{
	// 		await signInGoogle();
	// 	}catch (error){
	// 		console.log(JSON.stringify(error));
	// 	}
	// }


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
						icon={<MaterialIcons name="lock" size={24} color={primary100} />}
						placeholderText={"senha"}
						onChangeText={(text) => setSenha(text)}
						value={senha}
					/>
				</View>

				<View style={styles.forgetContainer}>
					<ButtonText onPress={() => alert("Esqueceu a senha")}>
						<Text style={styles.forgetText}>Esqueceu sua Senha?</Text>
					</ButtonText>
				</View>

				<Button text={"Login"} />

				<View style={styles.lineOrContainer}>
					<View style={styles.line} />

					<Text style={styles.or}>OU</Text>

					<View style={styles.line} />
				</View>

				{loading ? (
					<ActivityIndicator color={theme.colors.primary10} />
				) : (
					<ButtonFacebook
						onPress={() => alert("facebook")}
						text={"fazer login com Facebook"}
					/>
				)}

				<View style={styles.cadastrarContainer}>
					<Text style={styles.cadastrarText}>Ainda não possui uma conta?</Text>

					<ButtonText onPress={handleSignUp}>
						<Text style={styles.buttonText}>Cadastrar-se</Text>
					</ButtonText>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
