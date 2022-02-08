import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

type Props = RectButtonProps & {
	title: string;
	icon: React.FC<SvgProps>;
	checked?: boolean;
};

export const Category = ({
	title,
	icon: Icon,
	checked = false,
	...rest
}: Props) => {
	return (
		<RectButton {...rest} style={styles.container}>
			<View style={[styles.content, { opacity: checked ? 0.4 : 1 }]}>
				<Icon width={48} height={48} />
				<Text style={styles.title}>{title}</Text>
			</View>
		</RectButton>
	);
};
