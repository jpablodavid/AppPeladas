import React, { useEffect, useState } from "react";
import { View, Text, Modal, ScrollView, TextInput, } from "react-native";

import { Button } from "../Button";
import { theme } from "../../global/styles/theme";
import { ButtonText } from "../ButtonText";

import { styles } from "./styles";
import { ButtonDisable } from "../ButtonDisable";

export const Values = ({data}) => {

  const { primary100, line } = theme.colors;

  const [openModal, setOpenModal] = useState(false);

  const [add, setAdd] = useState(false);

  const [numberAtleta, setNumberAtleta] = useState("");

  const [month, setMonth] = useState("");

  const [convidados, setConvidados] = useState("0");

  const [totalConvidados, setTotalConvidados] = useState("0");

  const [name, setName] = useState("");

  const [idAtleta, setIdAtleta] = useState("");

  //teste para ser usado no usuario que é adm
  const adm = true;

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
    const athlete = data.athletes.find(item => item.number === value);
    athlete ? (setName(athlete.name), setIdAtleta(athlete.id)) : setName("Numero errado");
  }

  function printValorConvidados(value: string) {
    const valor =  parseFloat(value);
    const convidado = parseFloat(data.valorConvidado)
    const total =  valor * convidado;
    setTotalConvidados(total.toFixed(2));
  }

  function handlerAddMensalidade(id: string, mes: string) {
    // criar e exportar uma função para editar o user no firebase, para escrever o nome do mês no payment do user
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
              <Text style={styles.infoText}>{parseFloat("350").toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.money}>
          <Text style={styles.label}>Festa Fim de Ano:</Text>
          <View style={styles.valores}>
            <Text style={styles.label}>R$</Text>
            <View style={styles.values}>
              <Text style={styles.infoText}>{parseFloat("5000").toFixed(2)}</Text>
            </View>
          </View>
        </View>
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
            { adm ?
              <Button text={'Adicionar'} onPress={handlerOpenModalArrecadacoes}/>
              :
              <ButtonDisable text={'Adicionar'} />
            }
          </View>
        </View>
        <View style={[styles.money, {marginTop: 16}]}>
          <Text style={styles.label}>Custos:</Text>
          <View style={styles.button}>
            { adm ?
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
          <ButtonText style={{ width: 20 }} onPress={handlerCloseModal}>
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
                  <Button text={'Adicionar'} onPress={handlerOpenModal}/>
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
                    <Text style={styles.infoText}>{totalConvidados}</Text>
                  </View>
                </View>
                <View style={styles.buttonModal}>
                  <Button text={'Adicionar'} onPress={handlerOpenModal}/>
                </View>
              </ScrollView>
            )
            :
            (
              <View>
                <Text style={styles.labelModal}>Adicionar Gastos</Text>
                <Text style={styles.label}>Descrição do Gasto:</Text>
                <View style={styles.descricao}>
                  <Text style={styles.descricaoContent}>descrição dos gastos</Text>
                </View>
                <View style={styles.money}>
                <Text style={styles.label}>Valor:</Text>
                <View style={styles.valores}>
                  <Text style={styles.infoText}>R$</Text>
                  <Text style={styles.infoText}>20,00</Text>
                </View>
                </View>
                <View style={styles.buttonModal}>
                  <Button text={'adicionar'} onPress={handlerOpenModal}/>
                </View>
              </View>
            )
          }
        </View>
      </Modal>
		</View>
	);
};
