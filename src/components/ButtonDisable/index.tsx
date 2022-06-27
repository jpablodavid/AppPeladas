import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
	color?: string;
};

export const ButtonDisable = ({ color , text, ...rest }: Props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={styles.button}
			{...rest}
      disabled
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
