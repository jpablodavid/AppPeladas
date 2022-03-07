import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";


type Props = TouchableOpacityProps & {
	text: string;
	color?: string;
};

export const Button = ({ color , text, ...rest }: Props) => {
	const { secondary } = theme.colors;
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={[styles.button, { backgroundColor: color ? color : secondary}]}
			{...rest}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
