import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { tabColor, white } = theme.colors;
const { title700, text900 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
	label: {
		fontSize: RFValue(20),
		fontFamily: title700,
		marginRight: 8,
    marginVertical: 2,
	},
	infoText:{
		fontSize: RFValue(18),
		fontFamily: text900,
		color: tabColor,
		paddingBottom: 2,
	},
	money: {
		flexDirection: "row",
		alignItems: 'center',
	},
	button:{
		width: 150,
		height: 36,
		borderRadius: 8,
		backgroundColor: theme.colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 16,
		marginTop: 8,
	},
	textButton:{
		fontSize: RFValue(22),
		fontFamily: title700,
		color: white
	}
});
