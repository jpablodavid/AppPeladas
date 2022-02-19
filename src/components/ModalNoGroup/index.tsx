import React, { ReactNode } from "react";
import { View, Text, Modal, ModalProps } from "react-native";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import { styles } from "./styles";

type Props = ModalProps & {
	goToCriar: () => void;
	goToEntrar: () => void;
	setOpenModal: () => void;
};

export const ModalNoGroup = ({
	setOpenModal,
	goToCriar,
	goToEntrar,
	...rest
}: Props) => {
	function handlerExcluir() {
		alert("Excluir");
	}

	return (
		<Modal transparent animationType="slide" {...rest}>
			<View style={styles.container}>
				<ButtonText onPress={setOpenModal}>
					<Text style={styles.close}>X</Text>
				</ButtonText>
				<View style={styles.content}>
					<Text style={styles.text}>
						Você ainda não possui um Grupo de Peladas
					</Text>

					<Button
						style={styles.button}
						text={"Entrar em um Grupo"}
						onPress={goToEntrar}
					/>
					<Button
						style={styles.button}
						text={"Criar Grupo"}
						onPress={goToCriar}
					/>
				</View>
			</View>
		</Modal>
	);
};
