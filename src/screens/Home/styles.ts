import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, text900 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 0.9,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around'
	},
	right: {
    justifyContent: "space-around",
  },
	left: {
    justifyContent: "space-around"
	},
	camisa: {
		alignItems: "center",
		justifyContent: "center",
    //marginBottom: -16,
	},
	textCamisa: {
		position: "absolute",
		color: theme.colors.textButton,
		fontSize: 44,
		fontFamily: title700,
		textShadowColor: theme.colors.primary10,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
	textPosition: {
		fontSize: 32,
		fontFamily: text900,
		color: theme.colors.textButton,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
  nivel :{
    alignSelf: 'center',
    marginBottom: 16,
    fontSize: 28,
    fontFamily: theme.fonts.title700,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
  },
	scout: {
    alignSelf: 'center',
    fontSize: 32,
    fontFamily: theme.fonts.title700,
		color: theme.colors.circuloXp,
		marginRight: 4,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
  scoutText: {
    alignSelf: 'center',
    marginBottom: 16,
    fontSize: 28,
    fontFamily: theme.fonts.title700,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
  },
  buttonsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginBottom: 106
  }
});
