import React from "react";
import { View, Text ,TouchableOpacity, TouchableOpacityProps} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
	title: string;
  icon?: string;
};

export const ButtonAccess = ({ title, icon, ...rest }: Props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} {...rest} style={styles.container}>
      <View style={styles.textsContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={icon} size={34} color={theme.colors.tabColor}/>
			</View>
		</TouchableOpacity>
	);
};
