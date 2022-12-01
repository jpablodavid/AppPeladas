import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const {listName, secondary} = theme.colors;
const { title700 } = theme.fonts;;

export const styles = StyleSheet.create({
	container: {
		width: 96,
    height: 96,
		alignItems: "center",
		borderRadius: 20,
		marginRight: 12,
    marginTop: 44,
    backgroundColor: listName
	},
	content: {
		borderRadius: 8,
		alignItems: "center",
		paddingTop: 12,
	},
	title: {
		fontFamily: title700,
		color: secondary,
		fontSize: RFValue(16),
	},
});
