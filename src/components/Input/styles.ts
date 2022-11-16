import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 2,
		alignItems:"center",
	},
	input: {
		width: '100%',
		marginLeft: 8,
    fontSize: RFValue(16),
		color: theme.colors.primary100,
		fontFamily: theme.fonts.text500,
	},
});
