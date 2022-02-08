import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: theme.colors.primary100,
		alignItems:"center"
	},
	input: {
		width: '100%',
		marginLeft: 8,
		color: theme.colors.primary100,
		fontFamily: theme.fonts.text500,
	},
});
