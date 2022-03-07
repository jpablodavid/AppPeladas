import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

import { Button } from "../../components/Button";
import { ButtonFacebook } from "../../components/ButtonFacebook";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

import { useAuth } from "../../hooks/auth";


export const SignUp = () => {
	const { primary100 } = theme.colors;

	const { user, loading } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState("");

	const navigation = useNavigation();

	function handleSignIn() {
		navigation.navigate("SignIn");
	}

	function handleRegister() {
		navigation.navigate("CreateAccount");
	}


	const signUpWithEmailAndPassword = () => {
		auth().createUserWithEmailAndPassword(email, password)
		.then(() => alert('Cadastrada com sucesso'))
		.catch((error) => console.log(error));
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
						onChangeText={(text)=> setEmail(text)}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Input
						icon={<MaterialIcons name="lock" size={24} color={primary100} />}
						placeholderText={"senha"}
						onChangeText={(text)=> setPassword(text)}
					/>
				</View>
				<View style={styles.inputLastContainer}>
					<Input
						icon={<MaterialIcons name="lock" size={24} color={primary100} />}
						placeholderText={"confirmar senha"}
						onChangeText={(text)=> setConfirm(text)}
						value={confirm}
					/>
				</View>
				<Button text={"Cadastrar"} onPress={signUpWithEmailAndPassword} />
				<View style={styles.lineOrContainer}>
					<View style={styles.line} />
					<Text style={styles.or}>OU</Text>
					<View style={styles.line} />
				</View>
				<ButtonFacebook
					text={"Cadastrar com Facebook"}
					onPress={() => alert("fcebook")}
				/>
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
