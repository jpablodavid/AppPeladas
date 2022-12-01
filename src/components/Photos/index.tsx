import React, { useState } from "react";
import { View, Text, Image, ModalProps, Modal} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { ButtonText } from "../ButtonText";

import { styles } from "./styles";

type Props = RectButtonProps & ModalProps & {
	data: String;
};

export const Photo = ({data}: Props) => {

	const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

	return (
		<View>
			<RectButton style={styles.button} onPress={handlerOpenModal}>
        <Image style={styles.photo} source={{uri: `${data}`}} />
      </RectButton>
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <View style={styles.modal}>
          <ButtonText style={{ width: 60 }} onPress={handleCloseModal}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', margin: 8}}>X</Text>
          </ButtonText>

          <Image style={styles.photoCarrosel} source={{uri: `${data}`}} />
          <Text style={styles.text}>Festa Final de Ano 2020</Text>
        </View>
      </Modal>
		</View>
	);
};
