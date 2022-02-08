import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	stroke: {
		width: 70,
		height: 70,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 6,
	},
	text: {
		fontSize: 16,
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginTop: 4,
	},
	number: {
		fontSize: 30,
		fontFamily: theme.fonts.text900,
	},
});
