import React, { useEffect, useState }  from "react";
import {
  View,
  Text,
  Modal,
	ModalProps,
  TouchableWithoutFeedback,
  } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { User, useAuth } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";
import { Card } from "../Card";
import { Payment } from "../Payment";

import { styles } from "./styles";
import { Group } from "../../screens/Group";


type Props = RectButtonProps & ModalProps & {
	data: User;
  setAthletes: any;
  perfil: boolean;
  account: boolean;
};

export const Athletes = ({ data, perfil, setAthletes, account }: Props) => {

  const { user, group, accounting, excludeAthletes, loadAthletes } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  const [atualizarPagina, setAtualizarPagina ] = useState(false);

  async function recebe(){
    setAthletes(await loadAthletes(group.athletes));
  }

  useEffect(() => {
    recebe();
  }, [atualizarPagina]);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

  // usando accounting.id pois é o id do grupo
  function handlerExcluir() {
    excludeAthletes(accounting.id, data.id, data.name, data.camisa);
    setAtualizarPagina(true);
		alert("Atleta foi excluido do grupo");
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
