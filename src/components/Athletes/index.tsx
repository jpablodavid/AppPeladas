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

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

type Props = RectButtonProps & ModalProps & {
	data: User;
  perfil: boolean;
  exclude: (idGroup: string, idathletes: string) => Promise<void>;
};

export const Athletes = ({ data, perfil, exclude }: Props) => {

  const navigation = useNavigation();

  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

  function handlerExcluir() {
    exclude("xFMvKV2P2P3kcrl8NFzC", data.id);
		alert("Excluir");
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
      {user.adm && perfil &&(
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
            <ButtonText style={{ width: 40 }} onPress={handleCloseModal}>
              <Text >X</Text>
            </ButtonText>
              {perfil ? <Card data={data}/> : <Text>oi</Text> }
          </View>
        </TouchableWithoutFeedback>
      </Modal>
		</View>
	);
};
