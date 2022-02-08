import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100 } = theme.colors;
const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 40,
	},
	textContainer: {
		alignItems: "flex-start",
		marginVertical: 32,
	},
	title: {
		fontSize: 24,
		fontFamily: title700,
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
	lineOrContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
	},
	or: {
		textAlign: "center",
		fontSize: 12,
		fontFamily: title700,
		color: primary100,
		marginVertical: 8,
	},
	line: {
		width: 100,
		borderWidth: 0.5,
		borderColor: primary100,
	},
	loginContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 32,
	},
	loginText: {
		fontSize: 15,
		fontFamily: title500,
		color: primary100,
	},
});
