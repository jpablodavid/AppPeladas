import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { View } from "react-native";

type Props = {
	children: ReactNode;
};

export const CategoriesBackground = ({ children }: Props) => {
	const { primary100, secondary } = theme.colors;

	return (
		<LinearGradient
			style={styles.container}
			colors={[primary100, secondary]}
			start={[0, 0]}
			end={[0, 0.45]}
		>
			<View style={{ height: 16 }}></View>
			{children}
		</LinearGradient>
	);
};
