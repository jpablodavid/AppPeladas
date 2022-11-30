import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

const {listName, primary100, secondary, tabColor, background} = theme.colors;
const {text900, title700, } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
		flex: 1,
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		marginBottom: 8,
		overflow: "hidden",
	},
	number: {
		width: 60,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: listName,
		marginRight: 1,
	},
	textNumber: {
		fontSize: RFValue(24),
		fontFamily:text900,
		color: primary100,
	},
	name: {
		flex: 1,
		height: 80,
		flexDirection: "row",
		backgroundColor: listName,
		alignItems: "center",
		justifyContent: "space-between",
		padding: 16,
	},
  exclude: {
		height: 80,
		flexDirection: "row",
		backgroundColor: listName,
		alignItems: "center",
		justifyContent: "space-between",
		padding: 16,
		borderBottomEndRadius: 8,
		borderTopEndRadius: 8,
  },
	textName: {
		fontSize: RFValue(22),
		fontFamily:title700,
	},
	excludesButton: {
		width: 30,
		height: 30,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: secondary,
	},
	textButton: {
		fontSize: RFValue(26),
		fontFamily:title700,
	},
  modal:{
    flex: 1,
    marginTop: 120,
    marginHorizontal: 8,
    marginBottom: 90,
    borderWidth: 2,
    borderColor: tabColor,
		padding: 8,
		backgroundColor: background,
  },
});
