import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image, } from "react-native";

import { styles } from "./styles";

import GoogleImg from "../../assets/iconGoogle.png";

type Props = RectButtonProps & {
	text: string;
};

export const ButtonGoogle = ({ text, ...rest }: Props) => {
	return (
		<RectButton {...rest} style={styles.button}>
			<View style={styles.imgContainer}>
				<Image source={GoogleImg} />
			</View>
			<Text style={styles.text}>{text}</Text>
		</RectButton>
	);
};
