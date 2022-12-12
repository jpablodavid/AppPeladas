import React, { useState } from "react";
import { View, Text } from "react-native";

import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";

import { styles } from "./styles";

export const ListInfo = ({data}) => {

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal(){
		setOpenModal(true);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Dia Dos Jogos:</Text>
			<Text style={styles.infoText}>{group.day}</Text>
			<Text style={styles.label}>Horario:</Text>
			<Text style={styles.infoText}>{group.time}</Text>
			<Text style={styles.label}>Valor Mensalidade:</Text>
			<View style={styles.money}>
				<Text style={styles.label}>R$</Text>
				<Text style={styles.infoText}>{parseFloat(group.valorMensal).toFixed(2)}</Text>
			</View>
			<Text style={styles.label}>Valor Convidados:</Text>
			<View style={styles.money}>
				<Text style={styles.label}>R$</Text>
				<Text style={styles.infoText}>{parseFloat(group.valorConvidado).toFixed(2)}</Text>
			</View>
			<Text style={styles.label}>Contatos:</Text>
			<Text style={styles.infoText}>redes sociais e telefones</Text>
			<View style={{ marginTop: 16}}>
				{user.adm && (
					<Button text={"Editar"} onPress={handleOpenModal}/>
				)}
			</View>
		</View>
	);
};
