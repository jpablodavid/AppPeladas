import React from "react";
import { View } from "react-native";
import { Group } from "../../hooks/auth";
import { Staff } from "../Staff";

import { styles } from "./styles";

type Props = {
	data: Group;
};

export const ListStaff = ({data}: Props) => {

	return (
		<View style={styles.container}>
			<Staff data={data.presidente} />
			<Staff data={data.vicePresidente} />
			<Staff data={data.diretorFinanceiro} />
			<Staff data={data.diretorEventos} />
		</View>
	);
};
