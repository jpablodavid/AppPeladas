import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Menu } from "../Menu";
import { BorderlessButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
	title: string;
	menu?: ReactNode;
};

export const Header = ({ menu, title }: Props) => {
	const { background10, background100 } = theme.colors;

	//const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<LinearGradient
			style={styles.container}
			colors={[background100, background10]}
		>
			<View style={styles.content}>
				{menu ? (
					menu
				) : (
					<BorderlessButton onPress={handleGoBack}>
						<Feather name="arrow-left" size={24} color={"#000"} />
					</BorderlessButton>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
		</LinearGradient>
	);
};
