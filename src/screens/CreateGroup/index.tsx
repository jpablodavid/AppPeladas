import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export const CreateGroup = () => {
	const { primary100, secondary } = theme.colors;

	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [nickName, setNickName] = useState("");
	const [phone, setPhone] = useState("");
	const [position, setPosition] = useState("");
	const [team, setTeam] = useState("");

	const navigation = useNavigation();

	function handleGoHome() {
		navigation.navigate("Home");
	}

	function handleGoback() {
		navigation.goBack();
	}

	return (
		<>
			<ButtonText style={styles.goBack} onPress={handleGoback}>
				<Entypo name="chevron-left" size={24} color="black" />
			</ButtonText>

			<KeyboardAvoidingView style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.imgGrupo}>
						<LinearGradient
							style={styles.imageContainer}
							colors={[primary100, secondary]}
						>
							<View style={styles.image}>
								<Text style={styles.textInner}>+</Text>
							</View>
						</LinearGradient>

						<Text style={styles.textAdd}>Adicionar imagem</Text>
					</View>

					<View style={styles.textContainer}>
						<Text style={styles.text}>
							Preencha as Informações para criar seu
							<Text style={styles.title}> Grupo de Peladas.</Text>
						</Text>
					</View>

					<View style={styles.inputContainer}>
						<Input
							icon={
								<FontAwesome5 name="user-alt" size={24} color={primary100} />
							}
							placeholderText={"Nome do Grupo"}
						/>
					</View>

					<View style={styles.inputContainer}>
						<Input
							icon={
								<FontAwesome5
									name="calendar-day"
									size={24}
									color={primary100}
								/>
							}
							placeholderText={"Data de Criação "}
						/>
					</View>

					<View style={styles.inputContainer}>
						<Input
							icon={
								<FontAwesome5 name="user-tie" size={24} color={primary100} />
							}
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
							icon={
								<FontAwesome5 name="user-tag" size={24} color={primary100} />
							}
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
					<View style={{ marginBottom: 16 }}>
						<Button text={"Criar Grupo"} onPress={handleGoHome} />
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</>
	);
};
