import React, { useState } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Scout } from "../../components/Scout";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { ButtonAccess } from "../../components/ButtonAccess";

type Props = {
	position: string;
	camisa: string;
};

export const Home = ({ position, camisa }: Props) => {
	const { primary100, secondary } = theme.colors;

	let temJogo = false;

	return (
		<View style={styles.container}>
			<Header name={"pablo"} />
			<View style={styles.avatarContainer}>
				<Text style={styles.textAvatar}>{position}</Text>
				<Avatar urlImage="https://github.com/jpablodavid/" />
				<View style={styles.camisaContainer}>
					<Text style={styles.textAvatar}>Camisa</Text>
					<Text style={styles.camisa}>{camisa}</Text>
				</View>
			</View>
			<View style={styles.scoutContainer}>
				<Scout text={"Partidas"} number={"8"} />
				<Scout text={"Perna de pau"} number={"0"} />
				<Scout text={"Gols"} number={"12"} />
			</View>
			<LinearGradient
				style={styles.buttonsContainer}
				colors={[primary100, secondary]}
			>
				<ButtonAccess
					title={"titleBt"}
					text={"textBt"}
					image={"http://github.com/jpablodavid"}
				/>
				<View style={styles.line}></View>
				<ButtonAccess
					title={"titleBt"}
					text={"textBt"}
					image={"../../assets/iconGoogle.png"}
				/>
			</LinearGradient>
			<View style={styles.jogoContainer}>
				{temJogo ? <Text> Tem jogo</Text> :<Text>Nenhum jogo</Text>}
			</View>
		</View>
	);
};
