import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: "40%",
		height: 32,
		borderRadius: 8,
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderColor: "#ddd",
		padding: 8,
		fontSize: RFValue(18),
		fontFamily: theme.fonts.text500,
	},
});
