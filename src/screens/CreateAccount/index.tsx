import React, { useState } from "react";
import { View, Text} from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

import { styles } from "./styles";

export const CreateAccount = () => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [nickName, setNickName] = useState("");
	const [phone, setPhone] = useState("");
	const [position, setPosition] = useState("");
	const [team, setTeam] = useState("");

	return (
		<View style={styles.container}>
			<Logo/>
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
				<Input placeholderText={"Nome Completo"} />
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"Data de Nascimento"} />
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"Apelido ou Nome na camisa"} />
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"Telefone"} />
			</View>
			<View style={styles.inputContainer}>
				<Input placeholderText={"Posição preferida"} />
			</View>
			<View style={styles.inputLastContainer}>
				<Input placeholderText={"Time do Coração"} />
			</View>
			<Button text={"Criar Conta"} />
		</View>
	);
};
