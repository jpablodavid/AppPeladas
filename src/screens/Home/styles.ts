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
		alignItems: "center",
		justifyContent: "space-evenly",
    paddingVertical: 32,
    marginTop: 32
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
		backgroundColor: theme.colors.tabIcon,
		borderTopEndRadius: 36,
		paddingHorizontal: 8,
		paddingTop: 16,
    paddingBottom: 80,
	},
  buttonsContainer: {
    alignItems: "flex-start",
    justifyContent: "space-around",
  }
});
