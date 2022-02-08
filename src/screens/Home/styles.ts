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
		marginHorizontal: 16,
		marginTop: 8
	},
	textAvatar: {
		flex: 1,
		fontSize: 20,
		fontFamily: title700,
	},
	camisaContainer: {
		height: 70,
		alignItems: 'center',
	},
	camisa:{
		fontSize: 36,
		fontFamily: theme.fonts.text900,
	},
	scoutContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 16
	},
	buttonsContainer: {
		height: 290,
	},
	line: {
		height: 2,
		backgroundColor: theme.colors.line,
	},
	jogoContainer: {
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 3,
		borderColor: "red",
		backgroundColor: theme.colors.disable100,
	},
});
