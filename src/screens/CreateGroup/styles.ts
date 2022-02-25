import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 40,
	},
	goBack: {
		margin: 24,
		marginTop: 32,
	},
	imageContainer: {
		width: 92,
		height: 92,
		borderRadius: 46,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 8,
	},
	image: {
		width: 86,
		height: 86,
		borderRadius: 43,
		backgroundColor: theme.colors.background10,
		alignItems: "center",
		justifyContent: "center",
	},
	imgGrupo: {
		alignItems: "center",
		justifyContent: "center",
	},
	textInner: {
		fontSize: 24,
		fontFamily: theme.fonts.text500,
	},
	textAdd: {
		fontSize: 16,
		fontFamily: title700,
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
	},
	text: {
		fontFamily: title500,
		fontSize: 16,
	},
	title: {
		fontSize: 18,
		fontFamily: title700,
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
});
