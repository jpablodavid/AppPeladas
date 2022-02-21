import React, {useState} from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	text: string;
	number: string;
};

export const ProgressBar = ({ text, number }: Props) => {

	const [value, setvalue] = useState(200);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<AnimatedCircularProgress
				size={68}
				width={4}
				fill={value / 8}
				tintColor={theme.colors.circuloXp}
				backgroundColor={theme.colors.primary50}
				backgroundWidth={2}
				lineCap="round"
			>
				{(fill) => (
					<View style={styles.value}>
						<Text style={styles.number}>{value}</Text>
						<Text style={styles.xp}>Xp</Text>
					</View>
				)}
			</AnimatedCircularProgress>

			{/* <View style={styles.stroke}>
				<Text style={styles.number}>{number}</Text>
			</View> */}
		</View>
	);
};
