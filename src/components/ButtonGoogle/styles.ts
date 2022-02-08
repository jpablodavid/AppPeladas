import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const {secondary, shadow, textButton} = theme.colors;

export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		height: 32,
		backgroundColor: secondary,
		justifyContent: "space-evenly",
		alignItems: "center",
		borderRadius: 10,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		elevation: 4,
	},
	imgContainer: {
		width: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		fontSize: 16,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		letterSpacing: 1,
	},
});
