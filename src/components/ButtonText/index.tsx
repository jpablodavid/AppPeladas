import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./styles";

type Props = RectButtonProps & {
	text: string;
};

export const ButtonText = ({ text, ...rest }: Props) => {
	return (
		<RectButton>
			<Text style={styles.text}>{text}</Text>
		</RectButton>
	);
};
