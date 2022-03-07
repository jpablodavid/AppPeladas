import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { facebook, shadow, textButton } = theme.colors;

export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		height: 32,
		backgroundColor: facebook,
		justifyContent: "space-evenly",
		alignItems: "center",
		borderRadius: 10,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		elevation: 4,
	},
	imgContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		fontSize: 16,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		letterSpacing: 1,
	},
});
