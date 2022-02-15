import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
	label: {
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		marginVertical: 4,
		marginRight: 8,
	},
	infoText:{
		fontSize: 18,
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
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		color: theme.colors.textButton
	}
});
