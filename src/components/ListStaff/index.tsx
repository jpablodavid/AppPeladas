import React from "react";
import { ScrollView, View } from "react-native";
import { Group } from "../../hooks/auth";
import { Staff } from "../Staff";

import { styles } from "./styles";

type Props = {
	data: Group;
};


export const ListStaff = ({data}: Props) => {

	return (
		<ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
			<Staff data={data.presidente} occupation={"Presidente"}/>
      <Staff data={data.vicePresidente} occupation={"Vice-Presidente"}/>
			<Staff data={data.diretorEsportivo} occupation={"Diretor Esportivo"}/>
			<Staff data={data.diretorFinanceiro} occupation={"Diretor Financeiro"}/>
			<Staff data={data.diretorEventos} occupation={"Diretor de Eventos"}/>
		</ScrollView>
	);
};
