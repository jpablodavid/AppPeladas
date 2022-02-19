import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, shadow, textButton } = theme.colors;

export const styles = StyleSheet.create({
	button: {
		height: 32,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: primary100,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		elevation: 4,
	},
	text: {
		fontSize: 16,
		letterSpacing: 1,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
	},
});
