import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	View,
	Text,
	Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { ProgressBar } from "../../components/ProgressBar";


export const Profile = () => {
	//const navigation = useNavigation();

	function handleGoback() {
		//navigation.goBack();
	}


	return (
		<View style={styles.container}>
			<ButtonText style={styles.goBack} onPress={handleGoback}>
				<Entypo name="chevron-left" size={24} color="black" />
			</ButtonText>
			<View style={styles.card}>
				<LinearGradient
					style={styles.perfil}
					colors={[
						theme.colors.primary100,
						theme.colors.primary75,
						theme.colors.primary100,
					]}
				>
					<LinearGradient
						style={styles.range}
						colors={["#00000085", "#00000000"]}
					>
						<Text style={styles.camisa}>10</Text>
						<Text style={styles.position}>MC</Text>
						<Image
							style={styles.bandeira}
							source={require("../../assets/vasco.png")}
						/>
					</LinearGradient>
				</LinearGradient>

				<LinearGradient
					style={styles.scout}
					colors={[
						theme.colors.secondary,
						theme.colors.secondary75,
						theme.colors.secondary,
					]}
				>
					<View style={styles.name}>
						<Text style={styles.textName}>Pablo</Text>
					</View>
					<View style={styles.info}>
						<View style={styles.progress}>
							<ProgressBar text={"Perna de Pau"} number={"500"} inPerfil />
						</View>
						<View style={styles.data}>
							<Text style={styles.textData}>08 Gols</Text>
							<Text style={styles.textData}>12 Jogos</Text>
							<Text style={styles.textData}>5 Nota</Text>
						</View>
					</View>
				</LinearGradient>
			</View>
			<View style={styles.icons}>
				<ButtonText>
					<Entypo
						style={{ marginHorizontal: 18, marginBottom: 16 }}
						name="attachment"
						size={52}
						color="black"
					/>
				</ButtonText>
				<ButtonText>
					<Entypo
						style={{ marginHorizontal: 18 }}
						name="awareness-ribbon"
						size={52}
						color="black"
					/>
				</ButtonText>
				<ButtonText>
					<Entypo
						style={{ marginHorizontal: 18 }}
						name="battery"
						size={50}
						color="black"
					/>
				</ButtonText>
				<ButtonText>
					<Entypo
						style={{ marginHorizontal: 18 }}
						name="briefcase"
						size={52}
						color="black"
					/>
				</ButtonText>
				<ButtonText>
					<Entypo
						style={{ marginHorizontal: 18 }}
						name="bucket"
						size={52}
						color="black"
					/>
				</ButtonText>
				<ButtonText>
					<Entypo
						style={{ marginHorizontal: 12 }}
						name="bug"
						size={52}
						color="black"
					/>
				</ButtonText>
			</View>
		</View>
	);
};
