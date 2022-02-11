import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Scout } from "../../components/Scout";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Avatar } from "../../components/Avatar";
import { ButtonAccess } from "../../components/ButtonAccess";

import GroupSvg from "../../assets/duel.svg";
import PerfilSvg from "../../assets/fun.svg";

type Props = {
	position: string;
	camisa: string;
};

export const Home = ({ position, camisa }: Props) => {
	const { primary100, secondary } = theme.colors;

	let temJogo = false;

	return (
		<View style={styles.container}>
			<Header menu={<Menu />} title={"pablo"} />
			<View style={styles.avatarContainer}>
				<View style={styles.column}>
					<Text style={styles.textAvatar}>{position}</Text>
					<Scout text={"Partidas"} number={"8"} />
				</View>
				<View style={styles.columnAvatar}>
					<Avatar urlImage="https://github.com/jpablodavid.png" />
					<Scout text={"Partidas"} number={"8"} />
				</View>
				<View style={styles.column}>
					<View style={styles.camisaContainer}>
						<Text style={styles.textAvatar}>Camisa</Text>
						<Text style={styles.camisa}>{camisa}</Text>
					</View>
					<Scout text={"Partidas"} number={"8"} />
				</View>
			</View>
			<LinearGradient
				style={styles.buttonsContainer}
				colors={[primary100, secondary]}
			>
				<ButtonAccess
					title={"Grupo"}
					text={
						"Forme seu grupo, inicie uma partida, cadastre jogadores e der suas notas"
					}
					icon={GroupSvg}
				/>
				<View style={styles.line}></View>
				<ButtonAccess
					title={"Perfil"}
					text={"Veja suas conquistas, gols, score, partidas"}
					icon={PerfilSvg}
				/>
			</LinearGradient>
			<View style={styles.jogoContainer}>
				{temJogo ? <Text> Tem jogo</Text> : <Text>Nenhum jogo</Text>}
			</View>
		</View>
	);
};
