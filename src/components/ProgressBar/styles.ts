import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginLeft: -8,
	},
	text: {
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginBottom: 4,
    marginRight: 8,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	value: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	number: {
		fontFamily: theme.fonts.title700,
		color: theme.colors.shadow,
		marginRight: 2,
		textShadowColor: theme.colors.background100,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	xp: {
		fontSize: 10,
		fontFamily: theme.fonts.text900,
		color: theme.colors.background10,
	},
});
