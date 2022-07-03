import React, { useState }  from "react";
import {
  View,
  Text,
  Modal,
	ModalProps,
  TouchableWithoutFeedback,
  Button} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useAuth, User } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";

import { styles } from "./styles";

type Props = RectButtonProps & ModalProps & {
	data: User;
};

export const AthletesPayment = ({ data }: Props) => {

  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

	function handlerDetailsAthletes() {
		alert(data.adm);
	}

	return (
		<View style={styles.container}>
			<View style={styles.number}>
				<Text style={styles.textNumber}>{data.camisa}</Text>
			</View>
			<RectButton style={styles.name} onPress={handlerOpenModal}>
				<View style={{flex: 1, marginRight: 8}} >
					<Text style={styles.textName}>{data.name}</Text>
				</View>
			</RectButton>
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <TouchableWithoutFeedback
					onPress={handleCloseModal}
				>
          <View style={styles.modal}>
            <ButtonText style={{ width: 20 }} onPress={handleCloseModal}>
              <Text>X</Text>
            </ButtonText>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
		</View>
	);
};
