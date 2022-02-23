import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { shadow, textButton } = theme.colors;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 16,
		flexDirection: "row",
		marginBottom: 16,
		justifyContent: "space-around",
		backgroundColor: theme.colors.listName,
		paddingTop: 8,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		borderWidth: 1,
		borderColor: textButton,
	},
	textsContainer: {
		width: "70%",
	},
	title: {
		fontSize: 30,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
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
