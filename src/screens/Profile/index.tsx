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
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { nivelUser } from "../../global/Data/itens";


export const Profile = () => {
	const navigation = useNavigation();

  const{ user} = useAuth();

	function handleGoback() {
		navigation.goBack();
	}

  function siglaPosition ( position: string ) {
    if (position == "Zagueiro"){
      return "ZG"
    }else if(position == "Meio-Campo"){
      return "MC"
    }else if(position == "Atacante"){
      return "ATC"
    }else{
      return "LAT"
    }
  }

  function bandeira (time: string){
    if (time == "Vasco"){
      return "../../assets/vasco.png"
    }else if(time == "Flamengo"){
      return "../../assets/flamengo.png"
    }else if(time == "Botafogo"){
      return "../../assets/botafogo.png"
    }else{
      return "../../assets/fluminese.png"
    }
  }

	return (
		<Background>
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
						<Text style={styles.camisa}>{user.camisa}</Text>
						<Text style={styles.position}>{siglaPosition(user.position)}</Text>
						<Image
							style={styles.bandeira}
							source={require("../../assets/fluminense.png")}
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
						<Text style={styles.textName}>{user.nick_name}</Text>
					</View>
					<View style={styles.info}>
						<View style={styles.progress}>
							<ProgressBar text={nivelUser(user.xp)} number={Number(user.xp)} inPerfil />
						</View>
						<View style={styles.data}>
							<Text style={styles.textData}>{user.gols} Gols</Text>
							<Text style={styles.textData}>{user.partidas} Jogos</Text>
							<Text style={styles.textData}>{user.stars} Nota</Text>
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
		</Background>
	);
};
