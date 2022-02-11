import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { Header } from "../../components/Header";

export const CreateGroup = () => {
	const { primary100 } = theme.colors;

	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [nickName, setNickName] = useState("");
	const [phone, setPhone] = useState("");
	const [position, setPosition] = useState("");
	const [team, setTeam] = useState("");

	//const navigation = useNavigation();

	// function handleCreateAccount() {
	// 	navigation.navigate("Home");
	// }

	return (
		<>
			<Header title={""} />
			<View style={styles.container}>
				<View style={styles.imgGrupo}>
					<View style={styles.oval}>
						<Text>+</Text>
					</View>
					<Text>
						Adicionar imagem
					</Text>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						Preencha as Informações para criar seu
						<Text style={styles.title}> Grupo de Peladas.</Text>
					</Text>
				</View>

				<View style={styles.inputContainer}>
					<Input
						icon={<FontAwesome5 name="user-alt" size={24} color={primary100} />}
						placeholderText={"Nome do Grupo"}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Input
						icon={
							<FontAwesome5 name="calendar-day" size={24} color={primary100} />
						}
						placeholderText={"Data de Criação "}
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
						placeholderText={"WhatsApp (Grupo de msg)"}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Input
						icon={<FontAwesome5 name="user-tag" size={24} color={primary100} />}
						placeholderText={"Local do Campo"}
					/>
				</View>
				<View style={styles.inputLastContainer}>
					<Input
						icon={
							<FontAwesome5 name="heartbeat" size={24} color={primary100} />
						}
						placeholderText={"Data e Hora da Pelada"}
					/>
				</View>
				<Button text={"Criar Grupo"} />
			</View>
		</>
	);
};
