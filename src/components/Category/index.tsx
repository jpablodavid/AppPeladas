import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	icon?: React.FC<SvgProps>;
	checked?: boolean;
};

export const Category = ({title, icon: Icon, checked = false, ...rest }: Props) => {
	return (
		<TouchableOpacity {...rest} disabled={checked} style={styles.container}>
			<View style={[styles.content, { opacity: checked ? 0.4 : 1 }]}>
				{/* <Icon width={48} height={48} /> */}
				<Text style={styles.title}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};
