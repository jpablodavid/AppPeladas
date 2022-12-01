import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { primary100, shadow } = theme.colors;
const { title700 } = theme.fonts;

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
		fontSize: RFValue(18),
		letterSpacing: 1,
		color: primary100,
		fontFamily: title700,
	},
});
