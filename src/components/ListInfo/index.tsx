import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MyModal } from "../ModalNoGroup";


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

	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal(){
		setOpenModal(true);
	}

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
		<View style={styles.container}>
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
					<RectButton style={styles.button} onPress={handleOpenModal}>
						<Text style={styles.textButton}>Editar</Text>
					</RectButton>
				)}
			</View>
			<MyModal visible={openModal}>
				<Text>oi</Text>
			</MyModal>
		</View>
	);
};
