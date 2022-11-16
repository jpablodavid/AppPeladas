import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { title700, text500, text900} = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 40,
    marginTop: "20%"
	},
	imageContainer: {
		width: 100,
		height: 100,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 8,
	},
	image: {
		width: 86,
		height: 86,
		borderRadius: 43,
		backgroundColor: theme.colors.background,
		alignItems: "center",
		justifyContent: "center",
	},
	imgGrupo: {
		alignItems: "center",
		justifyContent: "center",
	},
	textInner: {
		fontSize: RFValue(40),
		fontFamily: text500,
	},
	textAdd: {
		fontSize: RFValue(24),
		fontFamily: title700,
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
	},
	text: {
		fontFamily: title700,
		fontSize: RFValue(18),
	},
	title: {
		fontSize: RFValue(18),
		fontFamily: text900,
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
});
