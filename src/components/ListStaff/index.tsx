import React from "react";
import { View } from "react-native";
import { Staff } from "../Staff";

import { styles } from "./styles";

type Props = {
	urlImage: string;
};

export const ListStaff = () => {
	const menbers = {
		id: "1",
		userName: "Pablo",
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
