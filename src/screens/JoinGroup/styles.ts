import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { title700, text500 } = theme.fonts;
const { disable100, disable10, background, primary100, tabColor} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginHorizontal: 40,
    marginTop: "17%"
	},
	textContainer: {
		alignItems: "center",
    marginBottom: 16,
	},
	text: {
		fontFamily: text500,
		fontSize: RFValue(20),
    color: tabColor
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		height: 45,
		borderRadius: 8,
		backgroundColor: disable100,
		borderColor: disable10,
		borderWidth: 1,
	},
	input: {
		flex: 1,
		height: 45,
		padding: 8,
		borderRightWidth: 1,
		borderRightColor: background,
	},
  lupa:{
    padding: 8,
  },
	list: {
		flex: .7,
	},
  buttonList:{
    backgroundColor: primary100,
    padding: 4,
    marginBottom: 8,
  },
  textList:{
    fontSize: RFValue(20),
    fontFamily: title700,
    textTransform: "uppercase"
  },
});
