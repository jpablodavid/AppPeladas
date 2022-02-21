import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginLeft: -8,
	},
	text: {
		fontSize: 14,
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginBottom: 4,
		color: theme.colors.line,
	},
	value: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	number: {
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		color: theme.colors.shadow,
		marginRight: 2,
	},
	xp: {
		fontSize: 10,
		fontFamily: theme.fonts.text900,
		color: theme.colors.background10,
	},
});
