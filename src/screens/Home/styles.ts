import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	avatar: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginVertical: 16,
	},
	infoBody: {},
	info: {
		flexDirection: "row",
	},
	camisa: {
		alignItems: "center",
		justifyContent: "center",
		marginRight: -6,
	},
	textCamisa: {
		position: "absolute",
		color: theme.colors.textButton,
		fontSize: 26,
		fontFamily: theme.fonts.title700,
		textShadowColor: theme.colors.primary10,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
	textPosition: {
		fontSize: 20,
		fontFamily: theme.fonts.text900,
		color: theme.colors.textButton,
		marginRight: 38,
		marginLeft: -10,
		paddingTop: 6,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
	scout: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	content: {
		height: 400,
		backgroundColor: theme.colors.background10,
		borderTopLeftRadius: 25,
		paddingHorizontal: 16,
		justifyContent: "space-around",
		paddingVertical: 16,
	},
	jogoContainer: {
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.background100,
		marginHorizontal: -16,
	},
	textJogo: {
		color: theme.colors.textButton,
		fontSize: 18,
		fontFamily: theme.fonts.title700,
	},
});
