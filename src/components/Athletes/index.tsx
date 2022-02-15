import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

export type athletesProps = {
	id: string;
	userName: string;
	number: string;
};

type Props = RectButtonProps & {
	data: athletesProps;
};

export const Athletes = ({ data }: Props) => {
	const isAdm = true;

	function handlerExcluir() {
		alert("Excluir");
	}

	function handlerDetailsAthletes() {
		alert("Abrir modal com detalhes do jogador");
	}

	return (
		<View style={styles.container}>
			<View style={styles.number}>
				<Text style={styles.textNumber}>{data.number}</Text>
			</View>
			<View style={styles.name}>
				<RectButton style={{flex: 1, marginRight: 8}}onPress={handlerDetailsAthletes}>
					<Text style={styles.textName}>{data.userName}</Text>
				</RectButton>
				{isAdm && (
					<RectButton style={styles.excludesButton} onPress={handlerExcluir}>
						<Text style={styles.textButton}>X</Text>
					</RectButton>
				)}
			</View>
		</View>
	);
};
