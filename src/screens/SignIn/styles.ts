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
		marginBottom: 32,
	},
	title: {
		fontSize: 24,
		fontFamily: title700,
	},
	text: {
		fontSize: 16,
		lineHeight: 16,
		textAlign: "justify",
		fontFamily: title500,
	},
	inputContainer: {
		marginBottom: 16,
	},
	forgetContainer: {
		marginBottom: 32,
	},
	forgetText: {
		textAlign: "right",
		color: primary100,
		fontSize: 14,
		fontFamily: title700,
		textDecorationLine: "underline",
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
		height: 0.7,
		backgroundColor: primary100,
	},
	cadastrarContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 32,
	},
	cadastrarText: {
		fontSize: 15,
		fontFamily: title500,
		color: primary100,
	},
	buttonText: {
		fontSize: 18,
		color: theme.colors.primary100,
		fontFamily: theme.fonts.title700,
		marginLeft: 3,
	},
});
