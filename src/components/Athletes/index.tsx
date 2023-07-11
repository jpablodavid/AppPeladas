import React, { useState }  from "react";
import {
  View,
  Text,
  Modal,
	ModalProps,
  TouchableWithoutFeedback,
  } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useAuth, User } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";
import { Card } from "../Card";
import { Payment } from "../Payment";

import { styles } from "./styles";


type Props = RectButtonProps & ModalProps & {
	data: User;
  perfil: boolean;
  exclude: (idGroup: string, idathletes: string) => Promise<void>;
  account: boolean;
};

export const Athletes = ({ data, perfil, exclude, account }: Props) => {

  const { user, accounting } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

  // usando accounting.id pois é o id do grupo
  function handlerExcluir() {
    exclude(accounting.id, data.id);
		alert("Excluir");
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
      {user.adm && !account &&(
        <View style={styles.exclude}>
          <RectButton style={styles.excludesButton} onPress={handlerExcluir}>
            <Text style={styles.textButton}>X</Text>
          </RectButton>
        </View>
			)}
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <TouchableWithoutFeedback
					onPress={handleCloseModal}
				>
          <View style={styles.modal}>
            <ButtonText onPress={handleCloseModal}>
              <Text style={styles.textButton}>X</Text>
            </ButtonText>
              {perfil ? <Card data={data}/> : <Payment data={data.payments}/>}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
		</View>
	);
};
