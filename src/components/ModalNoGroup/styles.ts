import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	touchClose:{
		height: 260,
	},
	container: {
		flex:1,
		padding: 16,
		backgroundColor: theme.colors.background,
		borderTopLeftRadius: 25
	},
	content: {
		flex: 1,
		padding: 32,
	},
	close: {
		fontSize: RFValue(24),
		fontFamily: theme.fonts.title700,
	},
	text: {
		fontSize: RFValue(20),
		fontFamily: theme.fonts.title700,
		textAlign: "center",
		marginVertical: 8
	},
	button: {
		marginVertical: 32,
	},
});
