import React from "react";
import { View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Staff } from "../Staff";

import { styles } from "./styles";

export const ListStaff = () => {

  const { group } = useAuth();

  const nome = group.staff[0]

	const menbers = {
		id: "1",
		userName: nome,
		avatar_url: "https://github.com/jpablodavid.png",
		occupation: "Presidente",
	};

	return (
		<View style={styles.container}>
			<Staff data={menbers} />
			<Staff data={menbers} />
			<Staff data={menbers} />
			<Staff data={menbers} />
		</View>
	);
};
