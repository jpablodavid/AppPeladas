import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const {shadow, tabIcon, tabColor, listName, secondary} = theme.colors;
const {text500, title700} = theme.fonts;

export const styles = StyleSheet.create({
	content: {
    flex: 1,
		backgroundColor: tabIcon,
		borderTopRightRadius: 36,
		padding: 16,
	},
  text:{
    flex: .5,
    paddingHorizontal: 12,
    fontFamily: text500,
    fontSize: RFValue(18),
    textAlign: "left",
    color: tabColor,
  },
  containerButton:{
    flex: .6,
    flexDirection: 'row',
  },
  button:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-evenly',
		borderRadius: 20,
    backgroundColor: listName,
    margin: 16,
    shadowColor: shadow,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
		fontFamily: title700,
		color: secondary,
		fontSize: RFValue(18),
	},
});
