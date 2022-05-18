import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	goBack: {
		marginLeft: 24,
		marginTop: 24,
	},
	container: {
		flex: 1,
		marginHorizontal: 40,
		marginTop: 8,
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 32,
	},
	text: {
		fontFamily: title500,
		fontSize: 18,
	},
	title: {
		fontSize: 20,
		fontFamily: title700,
	},
	informationText: {
		fontSize: 18,
		fontFamily: title700,
		marginVertical: 16,
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
});
