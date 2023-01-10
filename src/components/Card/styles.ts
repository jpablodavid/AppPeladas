import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { background, line, shadow, tabColor, black } = theme.colors;
const { text500, text900, title700} = theme.fonts;

export const styles = StyleSheet.create({
	card: {
		flex: 1,
		marginHorizontal: 16,
		borderRadius: 25,
		overflow: "hidden",
	},
	perfil: {
		flex: 1,
		flexDirection: 'row',
	},
	range: {
		width: 68,
		height: "100%",
		marginLeft: 32,
		alignItems: "center",
		paddingTop: 8,
	},
	camisa: {
		fontSize: RFValue(40),
		fontFamily: text900,
		color: line,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	position: {
		fontSize: RFValue(28),
		fontFamily: text500,
		color: line,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		marginBottom: 16,
		textTransform: "uppercase",
	},
	bandeira: {
		width: 48,
		height: 34,
		zIndex: 1,
	},
	avatar:{
    //margin: 30,
		width: 252,
		height: 240,
		//position: "relative",
		//top: 0,
		//left: 0,
	},
  camera: {
    //margin: 30,
    width: 252/* Dimensions.get("screen").width -58 */,
		height: 240,
  },
	scout: {
		flex: 1,
		alignItems: "center",
	},
	name: {
		width: "80%",
		borderBottomColor: line,
		borderBottomWidth: 1,
		marginBottom: 12,
	},
	textName: {
		fontSize: RFValue(36),
		fontFamily: title700,
		textTransform: "uppercase",
		textAlign: "center",
		color:black,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	info: {
		flexDirection: "row",
	},
	progress: {
		flex: 1,
		borderRightWidth: 1,
		borderRightColor: line,
	},
	data: {
		flex: 1,
	},
  containerText:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scoutData:{
    fontSize: RFValue(28),
		fontFamily: title700,
		color: black,
  },
	textData: {
		fontSize: RFValue(24),
		fontFamily: text500,
		color: tabColor,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	icons:{
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: 16,
		justifyContent: 'space-around',
		marginBottom: 48,
    marginTop: 16,
	},
  textButton: {
		fontSize: RFValue(26),
		fontFamily:title700,
	},
  modal:{
    flex: 1,
    marginTop: 320,
    marginHorizontal: 8,
    marginBottom: 210,
    borderWidth: 2,
    borderColor: tabColor,
		padding: 16,
		backgroundColor: background,
  },
  contentModal:{

  }
});
