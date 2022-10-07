import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, text900 } = theme.fonts;

export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
  },
	avatar: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end",
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
	},
	textCamisa: {
		position: "absolute",
		color: theme.colors.textButton,
		fontSize: 36,
		fontFamily: title700,
		textShadowColor: theme.colors.primary10,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
	textPosition: {
		fontSize: 32,
		fontFamily: text900,
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
    alignItems: "flex-end",
	},
	content: {
		height: 400,
		backgroundColor: theme.colors.tabIcon,
		borderTopLeftRadius: 25,
		paddingHorizontal: 16,
		justifyContent: "space-around",
		paddingVertical: 16,
	},
});
