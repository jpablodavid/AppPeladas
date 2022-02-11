import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export const CreateAccount = () => {
	const { primary100 } = theme.colors;

	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [nickName, setNickName] = useState("");
	const [phone, setPhone] = useState("");
	const [position, setPosition] = useState("");
	const [team, setTeam] = useState("");

	const navigation = useNavigation();

	function handleCreateAccount() {
		navigation.navigate("Home");
	}

	return (
		<View style={styles.container}>
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
					icon={<FontAwesome5 name="user-alt" size={24} color={primary100} />}
					placeholderText={"Nome completo"}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Input
					icon={
						<FontAwesome5 name="calendar-day" size={24} color={primary100} />
					}
					placeholderText={"Data de nascimento"}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Input
					icon={<FontAwesome5 name="user-tie" size={24} color={primary100} />}
					placeholderText={"Apelido ou Nome na camisa"}
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
				/>
			</View>
			<View style={styles.inputContainer}>
				<Input
					icon={<FontAwesome5 name="user-tag" size={24} color={primary100} />}
					placeholderText={"Posição preferida"}
				/>
			</View>
			<View style={styles.inputLastContainer}>
				<Input
					icon={<FontAwesome5 name="heartbeat" size={24} color={primary100} />}
					placeholderText={"Time do Corção"}
				/>
			</View>
			<Button text={"Criar Conta"} onPress={handleCreateAccount} />
		</View>
	);
};
