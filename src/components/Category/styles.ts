import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: 96,
    height: 96,
		alignItems: "center",
		borderRadius: 20,
		marginRight: 12,
    marginTop: 44,
    backgroundColor: theme.colors.listName
	},
	content: {
		borderRadius: 8,
		alignItems: "center",
		paddingTop: 12,
	},
	title: {
		fontFamily: theme.fonts.title700,
		color: theme.colors.secondary,
		fontSize: RFValue(16),
	},
});
