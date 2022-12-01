import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { facebook, shadow, white} = theme.colors;
const { title700 } = theme.fonts;

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
		fontSize: RFValue(16),
		color: white,
		fontFamily: title700,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		letterSpacing: 1,
	},
});
