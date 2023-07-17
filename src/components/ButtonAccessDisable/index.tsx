import React from "react";
import { View, Text ,TouchableOpacity, TouchableOpacityProps} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


type Props = TouchableOpacityProps & {
	title: string;
  icon?: string;
};

export const ButtonAccessDisable = ({ title, icon, ...rest }: Props) => {
	return (
		<TouchableOpacity activeOpacity={1} {...rest} style={styles.container}>
			<Text style={styles.title}>{title}</Text>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={icon} size={34} color={theme.colors.tabColorFocused}/>
			</View>
		</TouchableOpacity>
	);
};
