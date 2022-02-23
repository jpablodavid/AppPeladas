import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: 80,
		borderBottomLeftRadius: 25,
		backgroundColor: theme.colors.background10,
		shadowColor: theme.colors.shadow,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 3,
		paddingTop: getStatusBarHeight(),
	},
	content: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 16,
	},
	title: {
		fontSize: 30,
		fontFamily: theme.fonts.title700,
		color: theme.colors.primary100,
		textTransform: "uppercase",
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
});
