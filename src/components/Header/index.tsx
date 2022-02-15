import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

import { BorderlessButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
	title: string;
	menu: boolean;
};

export const Header = ({ menu, title }: Props) => {
	const { background10, background100 } = theme.colors;

	return (
		<LinearGradient
			style={styles.container}
			colors={[background100, background10]}
		>
			<View style={styles.content}>
				{menu ? (
					<BorderlessButton>
						<MaterialCommunityIcons
							name="menu"
							size={40}
							color={theme.colors.primary100}
							onPress={() => alert("menu")}
						/>
					</BorderlessButton>
				) : (
					<BorderlessButton>
						<Feather
							name="arrow-left"
							size={24}
							color={theme.colors.primary100}
							onPress={() => alert("back")}
						/>
					</BorderlessButton>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
		</LinearGradient>
	);
};
