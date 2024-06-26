import React, { useState } from "react";
import { View, Text, Modal, ScrollView, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";
import { ButtonText } from "../ButtonText";
import { weekday } from "../../global/Data/itens";
import { InputSelect } from "../InputSelect";


const { invisible, line } = theme.colors;


export const ListInfo = ({ data }) => {

  const { updateGroup, user, loadGroup} = useAuth();

  const [dayGame, setDayGame] = useState(data.day);

  const [timeHora, setTimeHora] = useState("Hora");
  const [timeMin, setTimeMin] = useState("Min");

  const [valorMensal, setValorMensal] = useState(data.valorMensal);

  const [valorConvidado, setValorConvidado] = useState(data.valorConvidado);

  const [openModal, setOpenModal] = useState(false);

  function handlerOpenModal() {
    setOpenModal(true);
  }

  function handlerCloseModal() {
    setOpenModal(false);
  }

	function handlerEditInfo(){
    updateGroup(dayGame, timeHora, timeMin, valorMensal, valorConvidado, data.id);
    loadGroup(data.id);
    setOpenModal(false);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Dia Dos Jogos:</Text>
      <Text style={styles.infoText}>{dayGame}</Text>
			<Text style={styles.label}>Horario:</Text>
      <Text style={styles.infoText}>{data.time}</Text>
			<Text style={styles.label}>Valor Mensalidade:</Text>
			<View style={styles.money}>
				<Text style={styles.label}>R$</Text>
        <Text style={styles.infoText}>{parseFloat(valorMensal).toFixed(2)}</Text>
			</View>
			<Text style={styles.label}>Valor Convidados:</Text>
			<View style={styles.money}>
				<Text style={styles.label}>R$</Text>
        <Text style={styles.infoText}>{parseFloat(valorConvidado).toFixed(2)}</Text>
			</View>
			<Text style={styles.infoText}>redes sociais:</Text>
      <View style={styles.socialMedia}>
        <TouchableOpacity
          style={styles.itemSocialMedia}
          activeOpacity={0.6}
          disabled={data.redesSociais.facebook ? false : true}
        >
          <MaterialCommunityIcons name="facebook" size={50} color='blue'/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemSocialMedia}
          activeOpacity={0.6}
          disabled={data.redesSociais.instagram ? false : true}
        >
          <MaterialCommunityIcons name="instagram" size={50} color='red'/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemSocialMedia}
          disabled={data.redesSociais.whatsapp ? false : true}
        >
          <MaterialCommunityIcons name="whatsapp" size={50} color='green'/>
        </TouchableOpacity>
      </View>
			<View style={{ marginTop: 16}}>
				{user.adm && (
					<Button text={"Editar"} onPress={handlerOpenModal}/>
				)}
			</View>
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <View style={styles.modal}>
          <ButtonText style={{ width: 20, backgroundColor: invisible }} onPress={handlerCloseModal}>
            <Text style={styles.close}>X</Text>
          </ButtonText>
            <ScrollView>
              <Text style={styles.labelModal}>Editar Informações</Text>
              <Text style={styles.title}>Dia dos jogos:</Text>
              <View style={styles.money}>
                <InputSelect
                  icon={<FontAwesome5 name="calendar-day" size={24} color="black" />}
                  placeholder={"escolha o dia da semana"}
                  itens={weekday}
                  selectedValue={dayGame}
                  onValueChange={setDayGame}
                />
              </View>
              <Text style={styles.title}>Horaio:</Text>
              <View style={styles.money}>
                  <TextInput
                    style={[{width: '20%', marginRight: 5},styles.input]}
                    placeholderTextColor={line}
                    placeholder="Hora"
                    keyboardType={"number-pad"}
                    onChangeText={setTimeHora}
                  />
                  <TextInput
                    style={[{width: '20%'},styles.input]}
                    placeholderTextColor={line}
                    placeholder="Min"
                    keyboardType={"number-pad"}
                    onChangeText={setTimeMin}
                  />
              </View>
              <Text style={styles.labelAdd}>Valores:</Text>
              <View style={styles.money}>
                  <Text style={styles.label}>Mensalidade:</Text>
                  <TextInput
                    style={[{width: '30%'},styles.input]}
                    placeholderTextColor={line}
                    onChangeText={setValorMensal}
                    keyboardType={"number-pad"}
                  />
              </View>
              <View style={styles.money}>
              <Text style={styles.label}>Convidados:  </Text>
              <TextInput
                    style={[{width: '30%'},styles.input]}
                    placeholderTextColor={line}
                    onChangeText={setValorConvidado}
                    keyboardType={"number-pad"}
                  />
              </View>
              <View style={styles.buttonModal}>
                <Button text={'Editar Valores'} onPress={handlerEditInfo}/>
              </View>
            </ScrollView>
            </View>
      </Modal>
		</View>
	);
};
