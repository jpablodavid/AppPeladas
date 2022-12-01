import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { title700, text900 } = theme.fonts;
const { circuloXp, white, primary10, shadow, line} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		flex: 0.9,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around'
	},
	right: {
    justifyContent: "space-around",
    marginTop: 24
  },
	left: {
    justifyContent: "space-around",
    alignItems: 'center',
	},
	camisa: {
		alignItems: "center",
		justifyContent: "center",
	},
	textCamisa: {
		position: "absolute",
		color: white,
		fontSize: RFValue(44),
		fontFamily: title700,
		textShadowColor: primary10,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
	textPosition: {
		fontSize: RFValue(32),
		fontFamily: text900,
		color: white,
		textShadowColor: shadow,
		textShadowOffset: { width: 1, height: -1 },
		textShadowRadius: 1,
	},
  image: {
    width: 60,
    height: 50,
    marginTop: -30,
  },
  nivel :{
    marginBottom: 16,
    fontSize: RFValue(28),
    fontFamily: title700,
		color: line,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
  },
	scout: {
    alignSelf: 'center',
    fontSize: 32,
    fontFamily: title700,
		color: circuloXp,
		marginRight: 4,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
  scoutText: {
    alignSelf: 'center',
    marginBottom: 24,
    fontSize: 28,
    fontFamily: title700,
		color: line,
		textShadowColor: shadow,
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
