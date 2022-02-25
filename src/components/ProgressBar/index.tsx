import React, { useState } from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	text: string;
	number: string;
	inPerfil: boolean;
};

export const ProgressBar = ({ text, number, inPerfil }: Props) => {
	const [value, setvalue] = useState(200);

	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.text,
					{
						fontSize: inPerfil ? 18 : 14,
						color: inPerfil ? theme.colors.background10 : theme.colors.line,
					},
				]}
			>
				{text}
			</Text>
			<AnimatedCircularProgress
				size={inPerfil ? 100 : 68}
				width={inPerfil ? 8 : 4}
				fill={value / 8}
				tintColor={inPerfil ? theme.colors.primary50 : theme.colors.circuloXp}
				backgroundColor={
					inPerfil ? theme.colors.circuloXp : theme.colors.primary50
				}
				backgroundWidth={inPerfil ? 3 : 2}
				lineCap="round"
			>
				{(fill) => (
					<View style={styles.value}>
						<Text style={[styles.number, { fontSize: inPerfil ? 32 : 20 }]}>
							{value}
						</Text>
						<Text style={[styles.xp, { fontSize: inPerfil ? 12 : 10 }]}>
							Xp
						</Text>
					</View>
				)}
			</AnimatedCircularProgress>

			{/* <View style={styles.stroke}>
				<Text style={styles.number}>{number}</Text>
			</View> */}
		</View>
	);
};
