import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
	label: {
		fontSize: RFValue(18),
		fontFamily: theme.fonts.title700,
		marginRight: 8,
    marginVertical: 2,
	},
	infoText:{
		fontSize: RFValue(16),
		fontFamily: theme.fonts.text900,
		color: theme.colors.secondary,
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
		fontSize: RFValue(20),
		fontFamily: theme.fonts.title700,
		color: theme.colors.textButton
	}
});
