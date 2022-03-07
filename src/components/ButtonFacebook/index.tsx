import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";


type Props = RectButtonProps & {
	text: string;
};

export const ButtonFacebook = ({ text, ...rest }: Props) => {
	return (
		<RectButton activeOpacity={0.6} {...rest} style={styles.button}>
			<View style={styles.imgContainer}>
				<MaterialIcons name="facebook" size={24} color="white" />
			</View>
			<Text style={styles.text}>{text}</Text>
		</RectButton>
	);
};
