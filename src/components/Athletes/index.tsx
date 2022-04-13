import React, { useRef } from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { User } from "../../hooks/auth";

import { styles } from "./styles";

type Props = RectButtonProps & {
	data: User;
};

export const Athletes = ({ data }: Props) => {

	function handlerExcluir() {
		alert("Excluir");
	}

	function handlerDetailsAthletes() {
		alert("Abrir modal com detalhes do jogador");
	}

	return (
		<View style={styles.container}>
			<View style={styles.number}>
				<Text style={styles.textNumber}>{data.camisa}</Text>
			</View>
			<View style={styles.name}>
				<RectButton style={{flex: 1, marginRight: 8}}onPress={handlerDetailsAthletes}>
					<Text style={styles.textName}>{data.name}</Text>
				</RectButton>
				{data.adm && (
					<RectButton style={styles.excludesButton} onPress={handlerExcluir}>
						<Text style={styles.textButton}>X</Text>
					</RectButton>
				)}
			</View>
		</View>
	);
};
