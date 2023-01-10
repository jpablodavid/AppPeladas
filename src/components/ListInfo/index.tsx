import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";

const { primary100 } = theme.colors;


export const ListInfo = ({ data }) => {

  const { updateGroup, user, group } = useAuth();

  const [dayGame, setDayGame] = useState(data.day);

  const [time, setTime] = useState(data.time);

  const [valorMensal, setValorMensal] = useState(data.valorMensal);

  const [valorConvidado, setValorConvidado] = useState(data.valorConvidado);

	function handleAtualizarDados(){
    updateGroup(dayGame, time, valorMensal, valorConvidado, data.id);
    alert("Dados atualizados");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Dia Dos Jogos:</Text>
      { user.adm ?
        <TextInput
          style={styles.inputEdit}
          placeholderTextColor={primary100}
          value={dayGame}
          onChangeText={setDayGame}
        />
        :
        <Text style={styles.infoText}>{dayGame}</Text>
      }
			<Text style={styles.label}>Horario:</Text>
      { user.adm ?
        <TextInput
          style={styles.inputEdit}
          placeholderTextColor={primary100}
          value={time}
          onChangeText={setTime}
        />
        :
        <Text style={styles.infoText}>{time}</Text>
      }
			<Text style={styles.label}>Valor Mensalidade:</Text>
			<View style={styles.money}>
				<Text style={styles.label}>R$</Text>
        { user.adm ?
          <TextInput
            style={styles.inputEdit}
            placeholderTextColor={primary100}
            value={valorMensal}
            onChangeText={setValorMensal}
          />
          :
          <Text style={styles.infoText}>{valorMensal}</Text>
        }
			</View>
			<Text style={styles.label}>Valor Convidados:</Text>
			<View style={styles.money}>
				<Text style={styles.label}>R$</Text>
        { user.adm ?
          <TextInput
            style={styles.inputEdit}
            placeholderTextColor={primary100}
            value={valorConvidado}
            onChangeText={setValorConvidado}
          />
          :
          <Text style={styles.infoText}>{valorConvidado}</Text>
        }
			</View>
			<Text style={styles.label}>Contatos:</Text>
			<Text style={styles.infoText}>redes sociais e telefones</Text>
			<View style={{ marginTop: 16}}>
				{user.adm && (
					<Button text={"Editar"} onPress={handleAtualizarDados}/>
				)}
			</View>
		</View>
	);
};
