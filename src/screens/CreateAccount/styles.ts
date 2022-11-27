import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { title700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 40,
		paddingTop: "20%"
	},
  goBack: {
    marginTop: 8,
    marginBottom: 16,
    marginLeft: -8,
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 32,
	},
	text: {
    fontFamily: text500,
    fontSize: RFValue(18),
	},
	title: {
		fontSize: RFValue(20),
		fontFamily: title700,
	},
	informationText: {
		fontSize: RFValue(18),
		fontFamily: title700,
		marginVertical: 16,
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
});
