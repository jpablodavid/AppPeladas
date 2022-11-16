import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { primary100, background} = theme.colors;
const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingHorizontal: 40,
		paddingTop: "20%",
	},
	textContainer: {
		alignItems: "flex-start",
		marginTop: 64,
		marginBottom: 32,
	},
	title: {
		fontSize: RFValue(24),
		fontFamily: title700,
    color: background
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 40,
	},
	lineOrContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
	},
	or: {
		textAlign: "center",
		fontSize: RFValue(12),
		fontFamily: title700,
		color: primary100,
		marginVertical: 8,
	},
	line: {
		width: 100,
		height: 0.7,
		backgroundColor: primary100,
	},
	loginContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 32,
	},
	loginText: {
		fontSize: RFValue(15),
		fontFamily: title500,
		color: primary100,
	},
	buttonText: {
		fontSize: RFValue(18),
		color: primary100,
		fontFamily: title700,
		marginLeft: 3,
	},
});
