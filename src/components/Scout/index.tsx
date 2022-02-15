import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
	text: string;
	number: string;
};

export const Scout = ({ text, number }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<View style={styles.stroke}>
				<Text style={styles.number}>{number}</Text>
			</View>
		</View>
	);
};
