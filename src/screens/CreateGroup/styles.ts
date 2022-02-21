import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 40,
	},
	goBack: {
		marginLeft: 24,
		marginTop: 24,
	},
	oval: {
		width: 90,
		height: 90,
		borderRadius: 70,
		borderWidth: 4,
		borderColor: theme.colors.circuloXp,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 8,
	},
	imgGrupo: {
		alignItems: "center",
		justifyContent: "center",
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
