import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { white } = theme.colors;
const { title700 } = theme.fonts;

export const styles = StyleSheet.create({
	button: {
		height: 56,
		justifyContent: "center",
		paddingLeft: 8,
    marginHorizontal: 8,
    marginBottom: 4,
    borderRadius: 4,
	},
	text: {
		fontSize: RFValue(24),
		letterSpacing: 1,
		fontFamily: title700,
		textShadowColor: white,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});
