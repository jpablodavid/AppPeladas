import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	goBack: {
		margin: 24,
		marginTop: 32,
	},
	textContainer: {
		alignItems: "center",
		marginBottom: 16,
	},
	text: {
		fontFamily: title500,
    textAlign: "center",
		fontSize: 18,
		marginVertical: 8,
    marginHorizontal: 16,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		height: 45,
		borderRadius: 8,
		backgroundColor: theme.colors.disable100,
		marginHorizontal: 24,
		borderColor: theme.colors.disable10,
		borderWidth: 1,
	},
	input: {
		flex: 1,
		height: 45,
		padding: 8,
		borderRightWidth: 1,
		borderRightColor: theme.colors.background10,
	},
	list: {
		flex: 1,
		borderWidth: 1,
		borderColor: "#000",
		margin: 24,
	},
  buttonList:{
    backgroundColor: theme.colors.primary25,
    padding: 4,
    marginBottom: 8,
  },
  textList:{
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    textTransform: "uppercase"
  },
	button: {
		margin: 24,
	},
});
