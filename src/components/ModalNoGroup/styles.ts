import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		marginTop: 240,
		backgroundColor: theme.colors.background10,
		borderTopLeftRadius: 25
	},
	content: {
		flex: 1,
		padding: 32,
	},
	close: {
		fontSize: 24,
		fontFamily: theme.fonts.title700,
	},
	text: {
		fontSize: 18,
		fontFamily: theme.fonts.text500,
		textAlign: "center",
		marginVertical: 8
	},
	button: {
		marginVertical: 32,
	},
});
