import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 40,
	},
	oval: {
		width: 70,
		height: 70,
		borderRadius: 70,
		borderWidth: 4,
		borderColor: "red",
		transform: [{ scaleX: 2 }],
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 16
	},
	imgGrupo: {
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
	},
	text: {
		fontFamily: title500,
		fontSize: 18,
	},
	title: {
		fontSize: 20,
		fontFamily: title700,
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
});
