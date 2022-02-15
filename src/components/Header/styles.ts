import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: 80,
		paddingTop: getStatusBarHeight(),
		borderBottomLeftRadius: 25,
		backgroundColor: theme.colors.background10,
		elevation: 5,
	},
	content: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 16,
	},
	title: {
		fontSize: 26,
		fontFamily: theme.fonts.text900,
		color: theme.colors.primary100,
		textTransform: "uppercase",
	},
});
