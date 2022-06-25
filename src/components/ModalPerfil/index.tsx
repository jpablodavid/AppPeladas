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
import { Entypo } from "@expo/vector-icons";
import { ButtonText } from "../ButtonText";
import { Background } from "../Background";

type Props = ModalProps & {
  setOpenModal: () => void;
	data: User;
};

export const ModalPerfil = ({data, setOpenModal, ...rest}: Props) => {


	return (
		<Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <Background>
        <ButtonText style={styles.goBack} onPress={setOpenModal}>
          <Entypo name="chevron-left" size={24} color="black" />
        </ButtonText>
        <Card data={data}/>
      </Background>
		</Modal>
	);
};
