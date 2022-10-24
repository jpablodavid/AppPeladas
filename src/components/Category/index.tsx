import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
	title: string;
	icon?: string;
	checked?: boolean;
};

export const Category = ({title, icon, checked = false, ...rest }: Props) => {
	return (
		<TouchableOpacity {...rest} disabled={checked} style={styles.container}>
			<View style={[styles.content, { opacity: checked ? 0.4 : 1 }]}>
        <MaterialCommunityIcons name={icon} size={42} color={theme.colors.background}/>
				<Text style={styles.title}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};
