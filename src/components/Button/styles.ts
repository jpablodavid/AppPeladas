import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { shadow, textButton } = theme.colors;

export const styles = StyleSheet.create({
	button: {
		height: 32,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		elevation: 4,
	},
	text: {
		fontSize: RFValue(18),
		letterSpacing: 1,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});
