import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		marginHorizontal: 16,
		backgroundColor: theme.colors.background10,
	},
	content: {
		flex: 1,
		alignItems: "center",
		padding: 16,
	},
	close: {
		fontSize: 24,
		fontFamily: theme.fonts.title700,
		marginBottom: 32,
	},
	text: {
		fontSize: 18,
		fontFamily: theme.fonts.text500,
		textAlign: "center",
		margin: 32
	},
	button: {
		marginVertical: 40,
	},
});
