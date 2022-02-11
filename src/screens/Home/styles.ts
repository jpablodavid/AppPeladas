import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	avatarContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: 'space-around',
		marginVertical: 16
	},
	textAvatar: {
		fontSize: 20,
		fontFamily: title700,
	},
	camisaContainer: {
		height: 50,
		alignItems: 'center',
	},
	camisa:{
		fontSize: 36,
		fontFamily: theme.fonts.text900,
	},
	column: {
		justifyContent: "space-between",
		marginBottom: 80
	},
	columnAvatar:{
		justifyContent: "space-around",
		marginBottom: -50
	},
	buttonsContainer: {
	},
	line: {
		height: 1,
		backgroundColor: theme.colors.line,
	},
	jogoContainer: {
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 3,
		borderColor: "red",
		backgroundColor: theme.colors.disable100,
	},
});
