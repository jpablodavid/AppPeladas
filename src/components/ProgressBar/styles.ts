import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginLeft: -8,
	},
	stroke: {
		width: 60,
		height: 60,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 4,
		borderColor: theme.colors.circuloXp,
	},
	text: {
		fontSize: 16,
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginBottom: 4,
		color: theme.colors.line,
	},
	number: {
		fontSize: 20,
		fontFamily: theme.fonts.text900,
		color: theme.colors.shadow,
	},
});
