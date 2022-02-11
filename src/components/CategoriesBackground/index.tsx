import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
	children: ReactNode;
};

export const CategoriesBackground = ({ children }: Props) => {
	const { primary100, secondary } = theme.colors;

	return (
		<LinearGradient
			style={styles.container}
			colors={[primary100, secondary]}
			start={[0, 0.1]}
			end={[0, 0.6]}
		>
			{children}
		</LinearGradient>
	);
};
