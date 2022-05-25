import React from "react";
import {
	View,
	Modal,
	ModalProps,
	TouchableWithoutFeedback,
} from "react-native";

import { User } from '../../hooks/auth'

import { styles } from "./styles";
import { Card } from "../Card";

type Props = ModalProps & {
  setOpenModal: () => void;
	data: User;
};

export const ModalPerfil = ({data, setOpenModal, ...rest}: Props) => {


	function handlerExcluir() {
		alert("Excluir");
	}

	return (
		<Modal transparent animationType="slide" statusBarTranslucent {...rest}>
				<TouchableWithoutFeedback
					onPress={setOpenModal}
				>
					<View style={styles.touchClose}></View>
				</TouchableWithoutFeedback>

        <Card data={data} />
		</Modal>
	);
};
