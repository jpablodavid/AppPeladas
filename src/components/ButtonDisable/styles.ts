import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, shadow, textButton } = theme.colors;

export const styles = StyleSheet.create({
	button: {
		height: 32,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
    borderWidth: 2,
    borderColor: primary100,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
	},
	text: {
		fontSize: 18,
		letterSpacing: 1,
		color: primary100,
		fontFamily: theme.fonts.title700,
	},
});
