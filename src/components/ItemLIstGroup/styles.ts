import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { primary100, secondary } = theme.colors;
const { title700 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		backgroundColor: primary100,
    padding: 4,
    marginBottom: 8,
	},
	content: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 8,
	},
	title: {
    fontSize: RFValue(24),
    fontFamily: title700,
    textTransform: "uppercase"
	},
  boxChecked:{
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: secondary
  }
});
