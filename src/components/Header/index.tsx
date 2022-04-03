import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { ButtonText } from "../ButtonText";

type Props = {
	title: string;
	menu?: boolean;
	goBack?: () => void;
  openMenu?: () => void;
};

export const Header = ({ menu, goBack, openMenu, title }: Props) => {
	const { background10, background100 } = theme.colors;

	return (
		<LinearGradient
			style={styles.container}
			colors={[background10, background100]}
		>
			<View style={styles.content}>
				{menu ? (
					<ButtonText onPress={openMenu}>
						<MaterialCommunityIcons
							name="menu"
							size={40}
							color={theme.colors.primary100}
						/>
					</ButtonText>
				) : (
					<ButtonText onPress={goBack}>
						<Feather
							name="arrow-left"
							size={24}
							color={theme.colors.primary100}
						/>
					</ButtonText>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
		</LinearGradient>
	);
};
