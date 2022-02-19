import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { Theme } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
	text: string;
	cor?: Theme;
};

export const Button = ({ cor, text, ...rest }: Props) => {
	const { primary100 } = theme.colors;

	return (
		<TouchableOpacity style={styles.button} {...rest}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
