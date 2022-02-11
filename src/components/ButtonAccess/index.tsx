import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { SvgProps } from "react-native-svg";

type Props = RectButtonProps & {
	title: string;
	text: string;
	icon: React.FC<SvgProps>;
};

export const ButtonAccess = ({ title, text, icon: Icon, ...rest }: Props) => {
	return (
		<RectButton {...rest} style={styles.container}>
			<View style={styles.textsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.text}>{text}</Text>
			</View>
			<View style={styles.icon}>
				<Icon width={48} height={48} />
			</View>
		</RectButton>
	);
};
