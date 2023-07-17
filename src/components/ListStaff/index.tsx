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
			<Staff data={data.presidente} occupation={"presidente"}/>
      <Staff data={data.vicePresidente} occupation={"vicePresidente"}/>
			<Staff data={data.diretorEsportivo} occupation={"diretorEsportivo"}/>
			<Staff data={data.diretorFinanceiro} occupation={"diretorFinanceiro"}/>
			<Staff data={data.diretorEventos} occupation={"diretorEventos"}/>
		</ScrollView>
	);
};
