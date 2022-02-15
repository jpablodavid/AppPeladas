import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { shadow, textButton} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 16,
		flexDirection: "row",
		marginBottom: 16,
		justifyContent: "space-around",
		backgroundColor: theme.colors.listName,
		paddingTop: 8
	},
	textsContainer: {
		width: "70%",
	},
	title: {
		fontSize: 30,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		letterSpacing: 1,
	},
	text: {
		fontSize: 16,
		fontFamily: theme.fonts.text500,
	},
	icon: {
		alignItems: "center",
		justifyContent: "center",
	},
});
