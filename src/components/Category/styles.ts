import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: 104,
		height: 120,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		marginRight: 8,
		backgroundColor: theme.colors.background10
	},
	content: {
		width: 100,
		height: 116,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 20,
	},
	title: {
		fontFamily: theme.fonts.title700,
		color: theme.colors.secondary,
		fontSize: 15,
		marginTop: 15,
	},
});
