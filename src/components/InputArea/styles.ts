import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderColor: "#ddd",
		textAlign: 'center',
		fontSize: RFValue(18),
		fontFamily: theme.fonts.text500,
	},
});
