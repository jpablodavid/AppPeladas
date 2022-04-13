import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props = {
	children: ReactNode;
};

export const Background = ({ children }: Props) => {

  const { background10, background100} = theme.colors;
	return (
		<LinearGradient
			style={{flex: 1}}
			colors={[background10, background100]}
			start={[0, 0]}
			end={[0, 1]}
		>
			{children}
		</LinearGradient>
	);
};
