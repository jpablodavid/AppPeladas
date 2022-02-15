import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Scout } from "../../components/Scout";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { ButtonAccess } from "../../components/ButtonAccess";

import { CategoriesBackground } from "../../components/CategoriesBackground";
import { ProgressBar } from "../../components/ProgressBar";

import GroupSvg from "../../assets/duel.svg";
import PerfilSvg from "../../assets/fun.svg";

type Props = {
	position: string;
	camisa: string;
};


export const Home = ({ position, camisa }: Props) => {
	const { primary100, secondary } = theme.colors;

	let temJogo = false;

	const navigation = useNavigation();

	function handleAcessGroup() {
		navigation.navigate("AcessGroup");
	}

	return (
		<View style={styles.container}>
			<Header menu={true} title={"pablo"} />
			<CategoriesBackground>
				<View style={styles.avatar}>
					<Avatar urlImage="https://github.com/jpablodavid.png" />
					<View style={styles.infoBody}>
						<View style={styles.info}>
							<Text style={styles.textPosition}>{position}</Text>
							<View style={styles.camisa}>
								<FontAwesome5 name="tshirt" size={50} color="black" />
								<Text style={styles.textCamisa}>{camisa}</Text>
							</View>
						</View>

						<View style={styles.scout}>
							<ProgressBar text={"Patidas"} number={"19"} />
							<Scout text={"Partidas"} number={"25"} />
							<Scout text={"Gols"} number={"19"} />
						</View>
					</View>
				</View>
				<View style={styles.content}>
					<ButtonAccess
						title={"Grupo"}
						text={
							"Forme seu grupo, inicie uma partida, cadastre jogadores e der suas notas"
						}
						icon={GroupSvg}
						onPress={handleAcessGroup}
					/>
					<ButtonAccess
						title={"Perfil"}
						text={"Veja suas conquistas, gols, score, partidas"}
						icon={PerfilSvg}
						onPress={handleAcessGroup}
					/>
					<View style={styles.jogoContainer}>
						{temJogo ? <Text> Tem jogo</Text> : <Text>Nenhum jogo</Text>}
					</View>
				</View>
			</CategoriesBackground>
		</View>
	);
};
