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
		color: theme.colors.shadow,
		fontSize: 26,
		fontFamily: theme.fonts.title700,
	},
	textPosition: {
		fontSize: 20,
		fontFamily: theme.fonts.text900,
		color: theme.colors.shadow,
		marginRight: 28,
		paddingTop: 6,
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
		marginHorizontal: -16
	},
});
