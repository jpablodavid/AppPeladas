import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

import { Menu } from "../Menu";

type Props = {
	name: string;
};

export const Header = ({ name }: Props) => {
	return (
		<View 
			style={styles.container}
		>
			<View style={styles.content}>
				<Menu />
				<Text style={styles.name}>{name}</Text>
			</View>
		</View>
	);
};
