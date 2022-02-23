import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	touchClose:{
		height: 240,
	},
	container: {
		flex:1,
		padding: 16,
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
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginVertical: 8
	},
	button: {
		marginVertical: 32,
	},
});
