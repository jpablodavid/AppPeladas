import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 6,
	},
	stroke: {
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderColor: theme.colors.circuloXp,
	},
	text: {
		fontSize: 14,
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginBottom: 4,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	number: {
		fontSize: 18,
		fontFamily: theme.fonts.text900,
		color: theme.colors.shadow,
		textShadowColor: theme.colors.background100,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});
