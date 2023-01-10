import React, { useEffect, useState } from "react";
import { View, Text, Modal, ScrollView, TextInput, } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { ButtonDisable } from "../ButtonDisable";
import { InputArea } from "../InputArea";
import { TouchableOpacity } from "react-native-gesture-handler";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export const Values = ({data}) => {

  const { primary100, line, invisible } = theme.colors;

  const today = new Date();

  const { user, accounting, addValues, addPayment } = useAuth();

  const [openModal, setOpenModal] = useState(false);

  const [add, setAdd] = useState(false);

  const [numberAtleta, setNumberAtleta] = useState("");

  const [valueCampo, setValueCampo] = useState(accounting.valorCampo);

  const [valueFesta, setValueFesta] = useState(accounting.valorFesta);

  const [month, setMonth] = useState("");

  const [descricao, setDescricao] = useState("");

  const [convidados, setConvidados] = useState("0");

  const [totalConvidados, setTotalConvidados] = useState(0);

  const [custo, setCusto] = useState("");

  const [name, setName] = useState("");

  const [idAtleta, setIdAtleta] = useState("");

	function handlerCloseModal() {
    setOpenModal(false);
    setAdd(true);
  }

  function handlerOpenModalCustos() {
    setOpenModal(true);
    setAdd(false);
  }

  function handlerOpenModalArrecadacoes() {
    setOpenModal(true);
    setAdd(true);
  }

  function handlerOpenModal() {
    setOpenModal(true);
  }

  function printNameAtleta(value: string) {
    const athlete = data.athletes.find((item: any) => item.number === value);
    athlete ? (setName(athlete.name), setIdAtleta(athlete.id)) : setName("Digite o Número");
  }

  function printValorConvidados(value: string) {
    const valor =  parseInt(value);
    const convidado = data.valorConvidado;
    const total =  valor * convidado;
    setTotalConvidados(total);
  }

  function handlerAddMensalidade() {
    addPayment(idAtleta, month);
    setOpenModal(false);
  }

  function handlerAddConvidados(){
    addValues(accounting.id, today, 'Pagamento Dos convidados do dia','arrecadacoes', totalConvidados,);
    setOpenModal(false);
  }

  function handlerAddCustos(){
    addValues(accounting.id, today, descricao, 'custos', parseFloat(custo));
    setOpenModal(false);
  }

  function handlerAddValues(){
    addValues(accounting.id, today, descricao, '', 0, valueCampo, valueFesta);
  }

  useEffect(() => {
    printValorConvidados(convidados);
    printNameAtleta(numberAtleta);
  }, [convidados, numberAtleta]);

	return (
		<View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Custos Fixos:</Text>
        <View style={styles.money}>
          <Text style={styles.label}>Campo:</Text>
          <View style={styles.valores}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.values}>
              { user.adm ?
                <TextInput
                  style={styles.inputEdit}
                  placeholderTextColor={primary100}
                  value={parseFloat(valueCampo).toFixed(2)}
                  onChangeText={setValueCampo}
                />
                :
                <Text style={styles.infoText}>{parseFloat(valueCampo).toFixed(2)}</Text>
              }
            </View>
          </View>
        </View>
        <View style={styles.money}>
          <Text style={styles.label}>Festa Fim de Ano:</Text>
          <View style={styles.valores}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.values}>
              { user.adm ?
                <TextInput
                  style={styles.inputEdit}
                  placeholderTextColor={primary100}
                  value={parseFloat(valueFesta).toFixed(2)}
                  onChangeText={setValueFesta}
                />
                :
                <Text style={styles.infoText}>{parseFloat(valueFesta).toFixed(2)}</Text>
              }
            </View>
          </View>
        </View>
        { user.adm ?
          <TouchableOpacity style={styles.edit} onPress={handlerAddValues}>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
          :
          <View/>
        }
        <Text style={styles.title}>Arrecadações Fixas:</Text>
        <View style={styles.money}>
          <Text style={styles.label}>Mensalidade:</Text>
          <View style={styles.valores}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.values}>
              <Text style={styles.infoText}>{parseFloat(data.valorMensal).toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.money}>
          <Text style={styles.label}>Convidado:</Text>
          <View style={styles.valores}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.values}>
              <Text style={styles.infoText}>{parseFloat(data.valorConvidado).toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.labelAdd}>ADICIONAR:</Text>
        <View style={styles.money}>
          <Text style={styles.label}>Arrecadação:</Text>
          <View style={styles.button}>
            { user.adm ?
              <Button text={'Adicionar'} onPress={handlerOpenModalArrecadacoes}/>
              :
              <ButtonDisable text={'Adicionar'} />
            }
          </View>
        </View>
        <View style={[styles.money, {marginTop: 16}]}>
          <Text style={styles.label}>Custos:</Text>
          <View style={styles.button}>
            { user.adm ?
              <Button text={'Adicionar'} color={primary100} onPress={handlerOpenModalCustos}/>
              :
              <ButtonDisable text={'Adicionar'} />
            }
          </View>
        </View>
      </View>
      <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={openModal}>
        <View style={styles.modal}>
          <ButtonText style={{ width: 20, backgroundColor: invisible }}onPress={handlerCloseModal}>
            <Text style={styles.close}>X</Text>
          </ButtonText>
          { add ?
            (
              <ScrollView>
                <Text style={styles.labelModal}>Adicionar Pagamento</Text>
                <Text style={styles.title}>Mensalidades:</Text>
                <View style={styles.money}>
                  <Text style={styles.label}>Número do Atleta:</Text>
                  <TextInput
                    style={[{width: '20%'},styles.input]}
                    placeholderTextColor={line}
                    keyboardType={"number-pad"}
                    value={numberAtleta}
                    onChangeText={setNumberAtleta}
                  />
                </View>
                <View style={styles.mostrar}>
                  <Text style={styles.mostrarContent}>{name}</Text>
                </View>
                <View style={styles.money}>
                  <Text style={styles.label}>Mês a Pagar:</Text>
                  <TextInput
                    style={[{width: '40%'},styles.input]}
                    placeholderTextColor={line}
                    value={month}
                    onChangeText={setMonth}
                  />
                </View>
                <View style={styles.buttonModal}>
                  <Button text={'Adicionar'} onPress={handlerAddMensalidade}/>
                </View>
                <Text style={styles.labelAdd}>Convidados:</Text>
                <View style={styles.money}>
                  <Text style={styles.label}>Número de Convidados:</Text>
                  <TextInput
                    style={[{width: '20%'},styles.input]}
                    placeholderTextColor={line}
                    onChangeText={setConvidados}
                    keyboardType={"number-pad"}
                  />
                </View>
                <View style={styles.money}>
                  <Text style={styles.label}>Total:</Text>
                  <View style={styles.valores}>
                    <Text style={styles.infoText}>R$ </Text>
                    <Text style={styles.infoText}>{totalConvidados.toFixed(2)}</Text>
                  </View>
                </View>
                <View style={styles.buttonModal}>
                  <Button text={'Adicionar'} onPress={handlerAddConvidados}/>
                </View>
              </ScrollView>
            )
            :
            (
              <View>
                <Text style={styles.labelModal}>Adicionar Gastos</Text>
                <Text style={styles.label}>Descrição do Gasto:</Text>
                <InputArea
                  style={styles.inputArea}
                  placeholderTextColor={'Descrição dos Gastos'}
                  onChangeText={setDescricao}
                />
                <View style={styles.money}>
                <Text style={styles.label}>Valor:</Text>
                <View style={styles.valores}>
                  <Text style={styles.infoText}>R$ </Text>
                  <TextInput
                    style={[{width: '60%'},styles.input]}
                    placeholderTextColor={line}
                    placeholder={"0.00"}
                    onChangeText={setCusto}
                    keyboardType={"number-pad"}
                  />
                </View>
                </View>
                <View style={styles.buttonModal}>
                  <Button text={'adicionar'} onPress={handlerAddCustos}/>
                </View>
              </View>
            )
          }
        </View>
      </Modal>
		</View>
	);
};

