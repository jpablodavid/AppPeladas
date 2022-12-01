import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { white, line } = theme.colors;
const { text500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		width: "40%",
		height: 32,
		borderRadius: 8,
		backgroundColor: white,
		borderBottomWidth: 1,
		borderColor: line,
		padding: 8,
		fontSize: RFValue(18),
		fontFamily: text500,
	},
});
