import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { white, line } = theme.colors;
const { text500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: white,
		borderBottomWidth: 1,
		borderColor: line,
		textAlign: 'center',
		fontSize: RFValue(18),
		fontFamily: text500,
	},
});
