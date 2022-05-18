import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Group, useAuth } from "../../hooks/auth";
//import { MyModal } from "../ModalNoGroup";

import { styles } from "./styles";

export const ListInfo = ({data}) => {

  const { group, user } = useAuth();

	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal(){
		setOpenModal(true);
	}
  console.log(group);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Dia Dos Jogos:</Text>
			<Text style={styles.infoText}>{group.day}</Text>
			<Text style={styles.label}>Horario:</Text>
			<Text style={styles.infoText}>{group.time}</Text>
			<Text style={styles.label}>Valor Mensalidade:</Text>
			<View style={styles.money}>
				<Text style={styles.label}> R$</Text>
				<Text style={styles.infoText}>{group.valorMensal}</Text>
			</View>
			<Text style={styles.label}>Valor Convidados:</Text>
			<View style={styles.money}>
				<Text style={styles.label}> R$</Text>
				<Text style={styles.infoText}>{group.valorConvidado}</Text>
			</View>
			<Text style={styles.label}>Contatos:</Text>
			<Text style={styles.infoText}>redes sociais e telefones</Text>
			<View style={{ alignItems: "center" }}>
				{user.adm && (
					<RectButton style={styles.button} onPress={handleOpenModal}>
						<Text style={styles.textButton}>Editar</Text>
					</RectButton>
				)}
			</View>
			{/* <MyModal visible={openModal}>
				<Text>oi</Text>
			</MyModal> */}
		</View>
	);
};
