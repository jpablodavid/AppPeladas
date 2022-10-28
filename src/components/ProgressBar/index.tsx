import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	number: number;
	inPerfil: boolean;
};

export const ProgressBar = ({  number, inPerfil }: Props) => {

	return (
		<View style={styles.container}>
			<AnimatedCircularProgress
				size={inPerfil ? 100 : 160}
				width={inPerfil ? 8 : 16}
				fill={500 / 8}
				tintColor={theme.colors.tabColor}
				backgroundColor={'#fff'}
				backgroundWidth={inPerfil ? 3 : 5}
				lineCap="round"
			>
				{(fill) => (
					<View style={styles.value}>
						<Text style={[styles.number, { fontSize: inPerfil ? 24 : 32 }]}>
							{500}
						</Text>
						<Text style={[styles.xp, { fontSize: inPerfil ? 12 : 18 }]}>
							Xp
						</Text>
					</View>
				)}
			</AnimatedCircularProgress>
		</View>
	);
};
