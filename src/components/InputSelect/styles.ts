import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: theme.colors.primary100,
		alignItems:"center"
	},
	input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width: "90%",
    fontSize: RFValue(16),
    margin: -10,
    marginLeft: 5,
		color: theme.colors.primary100,
		fontFamily: theme.fonts.text500,
	},
  placeholder:{
    fontSize: RFValue(14),
  },
  item:{
    color: theme.colors.primary100,
    fontFamily: theme.fonts.text900,
  }
});
