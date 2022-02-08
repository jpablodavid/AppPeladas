import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
	View,
	Text,
	Image,
} from "react-native";

import { styles } from "./styles";

type Props = RectButtonProps & {
	title: string;
	text: string;
	image: string;
};

export const ButtonAccess = ({ title, text, image,...rest }: Props) => {
	return (
		<RectButton style={styles.container}>
			<View style={styles.textsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.text}>{text}</Text>
			</View>
			<Image style={styles.img} source={{uri:(image)}} />
		</RectButton>
	);
};
