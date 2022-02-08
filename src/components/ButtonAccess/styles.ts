import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { shadow, textButton} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		height: 144,
		flexDirection: "row",
		marginHorizontal: 24,
		alignItems: "center",
		justifyContent: 'space-between'
	},
	textsContainer: {
		alignItems: "baseline",
	},
	title: {
		fontSize: 26,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		letterSpacing: 1,
	},
	text: {
		fontSize: 16,
		fontFamily: theme.fonts.text500,
	},
	img: {
		width: 50,
		height: 50,
		backgroundColor: 'blue'
	},
});
