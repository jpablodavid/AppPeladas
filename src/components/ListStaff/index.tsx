import React from "react";
import { View } from "react-native";
import { Group } from "../../hooks/auth";
import { Staff } from "../Staff";

import { styles } from "./styles";

type Props = {
	data: Group;
};

export const ListStaff = ({data}: Props) => {

	const menbers = {
		id: "1",
		userName: "nome",
		avatar_url: "https://github.com/jpablodavid.png",
		occupation: "Presidente",
	};

	return (
		<View style={styles.container}>
			<Staff data={data.presidente} />
			<Staff data={data.vicePresidente} />
			<Staff data={data.diretorFinanceiro} />
			<Staff data={data.diretorEventos} />
		</View>
	);
};
