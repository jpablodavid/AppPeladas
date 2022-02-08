import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: 50,
		marginTop: getStatusBarHeight(),
		borderBottomWidth: 1,
	},
	content: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 16,
	},
	name: {
		fontSize: 26,
		fontFamily: theme.fonts.text900,
		textTransform: "uppercase",	
	},
});
