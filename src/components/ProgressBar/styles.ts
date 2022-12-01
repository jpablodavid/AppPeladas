import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { circuloXp } = theme.colors;
const { text900, title700 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	value: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	number: {
		fontFamily: title700,
		color: circuloXp,
		marginRight: 4,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	xp: {
		fontSize: RFValue(10),
		fontFamily: text900,
	},
});
