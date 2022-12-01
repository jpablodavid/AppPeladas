import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	number: number;
	inPerfil: boolean;
};

export const ProgressBar = ({  number, inPerfil }: Props) => {

  const { white, tabColor } = theme.colors;

	return (
		<View style={styles.container}>
			<AnimatedCircularProgress
				size={inPerfil ? 100 : 160}
				width={inPerfil ? 8 : 16}
				fill={number / 8}
				tintColor={tabColor}
				backgroundColor={white}
				backgroundWidth={inPerfil ? 3 : 5}
				lineCap="round"
			>
				{(fill) => (
					<View style={styles.value}>
						<Text style={[styles.number, { fontSize: inPerfil ? RFValue(24) : RFValue(32) }]}>
							{number}
						</Text>
						<Text style={[styles.xp, { fontSize: inPerfil ? RFValue(12) : RFValue(18) }]}>
							Xp
						</Text>
					</View>
				)}
			</AnimatedCircularProgress>
		</View>
	);
};
