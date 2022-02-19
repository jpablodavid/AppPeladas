import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Scout } from "../../components/Scout";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { ButtonAccess } from "../../components/ButtonAccess";
import { CategoriesBackground } from "../../components/CategoriesBackground";
import { ProgressBar } from "../../components/ProgressBar";
import { ModalNoGroup } from "../../components/ModalNoGroup";

import GroupSvg from "../../assets/duel.svg";
import PerfilSvg from "../../assets/fun.svg";

type Props = {
	route: RouteProp<{ params: { position: string; camisa: string } }, "params">;
};

export const Home = ({ route }: Props) => {
	const { primary100, secondary } = theme.colors;

	let temJogo = false;
	let isGroup = true;

	const [openModal, setOpenModal] = useState(false);

	const navigation = useNavigation();

	function handleCloseModal() {
		setOpenModal(false);
	}

	function handleAcessPerfil() {
		navigation.navigate("Perfil");
	}

	function handleAcessGroup() {
		isGroup ? navigation.navigate("AcessGroup") : setOpenModal(true);
	}

	function handleEntrarGrupo() {
		navigation.navigate("SignIn");
		setOpenModal(false);
	}

	function handleCriarGrupo() {
		setOpenModal(false);
		navigation.navigate("SignUp");
	}

	return (
		<View style={styles.container}>
			<Header menu={true} title={"pablo"} />
			<CategoriesBackground>
				<View style={styles.avatar}>
					<Avatar urlImage="https://github.com/jpablodavid.png" />
					<View style={styles.infoBody}>
						<View style={styles.info}>
							<Text style={styles.textPosition}>{route.params.position}</Text>
							<View style={styles.camisa}>
								<FontAwesome5 name="tshirt" size={50} color="black" />
								<Text style={styles.textCamisa}>{route.params.camisa}</Text>
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
						onPress={handleAcessPerfil}
					/>
					<View style={styles.jogoContainer}>
						{temJogo ? <Text> Tem jogo</Text> : <Text>Sem Partidas no momento</Text>}
					</View>
				</View>
			</CategoriesBackground>
			<ModalNoGroup
				visible={openModal}
				setOpenModal={handleCloseModal}
				goToEntrar={handleEntrarGrupo}
				goToCriar={handleCriarGrupo}
			/>
		</View>
	);
};