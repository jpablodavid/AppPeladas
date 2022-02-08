import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
	children: ReactNode;
};

export const Background = ({ children }: Props) => {
	const { background10, background100 } = theme.colors;
	return (
		<LinearGradient
			style={styles.container}
			colors={[background10, background100]}
		>
			{children}
		</LinearGradient>
	);
};
