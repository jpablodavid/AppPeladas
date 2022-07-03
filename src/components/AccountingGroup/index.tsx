import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useAuth } from "../../hooks/auth";
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";

export const AccountingGroup = ({data}) => {

  const { group } = useAuth();

	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal(){
		setOpenModal(true);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Mês:</Text>
			<View style={styles.calendario}>
        <View style={styles.setas}>
          <View></View>
          <AntDesign name="doubleleft" size={24} color="black" />
          <View></View>
        </View>
        <ScrollView
          horizontal
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 40 }}
        >
          {data.map((item) => (
          <View style={styles.mes}>
              <Text style={styles.label}>{item}</Text>
              <Text style={styles.infoText}>Arrecadação</Text>
              <Text style={styles.infoText}>R$ 1000,00</Text>
              <Text style={styles.infoText}>custo</Text>
              <Text style={styles.infoText}>R$ 200,00</Text>
            </View>
          ))
          }
        </ScrollView>
        <View style={styles.setas}>
          <AntDesign name="doubleright" size={24} color="black" />
        </View>
      </View>
			<Text style={styles.label}>Anual</Text>
			<View style={styles.money}>
        <Text style={styles.label}>Arrecadações:</Text>
				<Text style={styles.infoText}> R$</Text>
				<Text style={styles.infoText}>1000,00</Text>
			</View>
      <View style={styles.money}>
        <Text style={styles.label}>Custos:            </Text>
				<Text style={styles.infoText}> R$</Text>
				<Text style={styles.infoText}>200,00</Text>
			</View>
      <View style={styles.money}>
        <Text style={styles.label}>Rendimentos:</Text>
				<Text style={styles.infoText}> R$</Text>
				<Text style={styles.infoText}>30,00</Text>
			</View>
		</View>
	);
};
