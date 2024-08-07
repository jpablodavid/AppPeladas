import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { primary100, black } = theme.colors;
const { text500, text900 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: primary100,
		alignItems:"center"
	},
	input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: "90%",
    fontSize: RFValue(16),
    margin: -10,
    marginLeft: 5,
		color: black,
		fontFamily: text500,
	},
  placeholder:{
    fontSize: RFValue(16),
  },
  item:{
    color: black,
    fontFamily: text900,
  }
});
