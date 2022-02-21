import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


const { primary100, secondary } = theme.colors;

type Props = TouchableOpacityProps & {
	text: string;
	color?: boolean;
};

export const Button = ({ color, text, ...rest }: Props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={[
				styles.button,
				{ backgroundColor: color ? secondary : primary100 },
			]}
			{...rest}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
