import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 6,
	},
	stroke: {
		width: 70,
		height: 70,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 4,
		borderColor: theme.colors.circuloXp,
	},
	text: {
		fontSize: 24,
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginBottom: 4,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	number: {
		fontSize: 20,
		fontFamily: theme.fonts.text900,
		color: theme.colors.tabColor,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});
