import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	value: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	number: {
		fontFamily: theme.fonts.title700,
		color: theme.colors.circuloXp,
		marginRight: 4,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	xp: {
		fontSize: RFValue(10),
		fontFamily: theme.fonts.text900,
	},
});
