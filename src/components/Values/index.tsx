import React, { useState } from "react";
import { View, Text, Modal, ModalProps, TouchableWithoutFeedback, } from "react-native";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { Button } from "../Button";
import { theme } from "../../global/styles/theme";
import { ButtonText } from "../ButtonText";

const { primary100 } = theme.colors;

export const Values = ({data}) => {

  const { group } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  const [add, setAdd] = useState(true);

	function handlerCloseModal() {
    setOpenModal(false);
    setAdd(true);
  }

  function handlerOpenModalCustos() {
    setOpenModal(true);
    setAdd(false);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Custos Fixos:</Text>
			<View style={styles.money}>
        <Text style={styles.label}>Campo:</Text>
				<View style={styles.valores}>
          <Text style={styles.infoText}> R$</Text>
					<Text style={styles.infoText}>350,00</Text>
				</View>
			</View>
			<View style={styles.money}>
        <Text style={styles.label}>Festa Fim de Ano:</Text>
				<View style={styles.valores}>
					<Text style={styles.infoText}> R$</Text>
					<Text style={styles.infoText}>5000,00</Text>
				</View>
			</View>
			<Text style={styles.label}>Arrecadações Fixas:</Text>
			<View style={styles.money}>
        <Text style={styles.label}>Mensalidade:</Text>
        <View style={styles.valores}>
          <Text style={styles.infoText}> R$</Text>
          <Text style={styles.infoText}>50,00</Text>
        </View>
      </View>
      <View style={styles.money}>
        <Text style={styles.label}>Convidado:</Text>
        <View style={styles.valores}>
          <Text style={styles.infoText}> R$</Text>
          <Text style={styles.infoText}>20,00</Text>
        </View>
			</View>
      <Text style={styles.labelAdd}>ADICIONAR:</Text>
      <View style={styles.money}>
        <Text style={styles.label}>Arrecadação:</Text>
        <Button text={'adicionar'} onPress={handlerOpenModal}/>
			</View>
      <View style={[styles.money, {marginTop: 16}]}>
        <Text style={styles.label}>Custos:</Text>
        <Button text={'adicionar'} color={primary100} onPress={handlerOpenModalCustos}/>
			</View>
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <TouchableWithoutFeedback
					onPress={handlerCloseModal}
				>
          <View style={styles.modal}>
            <ButtonText style={{ width: 20 }} onPress={handlerCloseModal}>
              <Text>X</Text>
            </ButtonText>
            { add ?
            (<View>
              <Text style={styles.labelModal}>Adicionar Pagamento</Text>
              <Text style={styles.label}>Mensalidades:</Text>
              <View style={styles.money}>
                <Text style={styles.label}>Número do Atleta:</Text>
                <Text style={styles.infoText}>10</Text>
              </View>
              <View style={styles.mostrar}>
                <Text style={styles.mostrarContent}>nome do atleta</Text>
              </View>
              <View style={styles.money}>
                <Text style={styles.label}>Mês a Pagar:</Text>
                <Text style={styles.infoText}>dezembro</Text>
              </View>
              <View style={styles.buttonModal}>
                <Button text={'adicionar'} onPress={handlerOpenModal}/>
              </View>
              <Text style={styles.labelAdd}>Convidados:</Text>
              <View style={styles.money}>
                <Text style={styles.label}>Número de Convidados:</Text>
                <Text style={styles.infoText}>4</Text>
              </View>
              <View style={styles.money}>
                <Text style={styles.label}>Total:</Text>
                <View style={styles.valores}>
                  <Text style={styles.infoText}> R$</Text>
                  <Text style={styles.infoText}>{4 * 20},00</Text>
                </View>
              </View>
              <View style={styles.buttonModal}>
                <Button text={'adicionar'} color={primary100} onPress={handlerOpenModal}/>
              </View>
            </View>)
            :
            (<View>
              <Text style={styles.labelModal}>Adicionar Gastos</Text>
              <Text style={styles.label}>Descrição do Gasto:</Text>
              <View style={styles.descricao}>
                <Text style={styles.descricaoContent}>oiieuyr</Text>
              </View>
              <View style={styles.money}>
              <Text style={styles.label}>Valor:</Text>
              <View style={styles.valores}>
                <Text style={styles.infoText}> R$</Text>
                <Text style={styles.infoText}>20,00</Text>
              </View>
              </View>
              <View style={styles.buttonModal}>
                <Button text={'adicionar'} color={primary100} onPress={handlerOpenModal}/>
              </View>
            </View>)}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
		</View>
	);
};
