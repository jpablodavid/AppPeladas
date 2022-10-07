import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	text: string;
	number: number;
	inPerfil: boolean;
};

export const ProgressBar = ({ text, number, inPerfil }: Props) => {

	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.text,
					{
						fontSize: inPerfil ? 20 : 22,
						color: inPerfil ? theme.colors.tabColor : theme.colors.line,
					},
				]}
			>
				{text}
			</Text>
			<AnimatedCircularProgress
				size={100}
				width={inPerfil ? 8 : 12}
				fill={number / 8}
				tintColor={inPerfil ? theme.colors.tabColor : theme.colors.circuloXp}
				backgroundColor={
					inPerfil ? theme.colors.circuloXp : theme.colors.tabColor
				}
				backgroundWidth={inPerfil ? 3 : 6}
				lineCap="round"
			>
				{(fill) => (
					<View style={styles.value}>
						<Text style={[styles.number, { fontSize: inPerfil ? 32 : 32 }]}>
							{number}
						</Text>
						<Text style={[styles.xp, { fontSize: inPerfil ? 12 : 18 }]}>
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
