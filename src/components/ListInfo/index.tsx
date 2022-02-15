import React from "react";
import { KeyboardAvoidingView, View, ScrollView, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { InputArea } from "../InputArea";
import { InputEdit } from "../InputEdit";

import { styles } from "./styles";

export type InfoProps = {
	id: string;
	name: string;
	dayWeek: string;
	time: string;
	valorMensal: string;
	valorConvidado: string;
	local: string;
};

type Props = RectButtonProps & {
	data: InfoProps;
};

const isAdm = true;

export const ListInfo = ({ data }: Props) => {
	const info = {
		id: "1",
		name: "Amendoeira",
		dayWeek: "Sexta-Feira",
		time: "08",
		valorMensal: "50",
		valorConvidado: "20",
		local: "Rua: ivinheima, 368 - bento ribeiro campo do sapê",
	};

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Text style={styles.label}>Dia Dos Jogos:</Text>
			<Text style={styles.infoText}>Sexta-feira</Text>
			<Text style={styles.label}>Horario:</Text>
			<Text style={styles.infoText}>08:00</Text>
			<Text style={styles.label}>Valor Mensalidade:</Text>
			<View style={styles.money}>
				<Text style={styles.label}> R$</Text>
				<Text style={styles.infoText}>50,00</Text>
			</View>
			<Text style={styles.label}>Valor Convidados:</Text>
			<View style={styles.money}>
				<Text style={styles.label}> R$</Text>
				<Text style={styles.infoText}>20,00</Text>
			</View>
			<Text style={styles.label}>Contatos:</Text>
			<Text style={styles.infoText}>redes sociais e telefones</Text>
			<View style={{ alignItems: "center" }}>
				{isAdm && (
					<RectButton style={styles.button}>
						<Text style={styles.textButton}>Editar</Text>
					</RectButton>
				)}
			</View>
		</ScrollView>
	);
};
