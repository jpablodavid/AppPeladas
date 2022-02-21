import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title500, title700} = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	goBack: {
		margin: 24,
	},
	textContainer: {
		alignItems: "center",
		marginBottom: 16,
	},
	text: {
		fontFamily: title500,
		fontSize: 18,
		marginVertical: 8,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		//justifyContent: "space-between",
		height: 45,
		borderRadius: 8,
		padding: 8,
		backgroundColor: theme.colors.disable100,
		marginHorizontal: 24,
		borderColor: theme.colors.disable10,
		borderWidth: 1,
	},
	input: {
		flex: 1,
		height: 45,
		marginRight: 8,
		borderRightWidth:1,
		borderRightColor: theme.colors.background10
	},
	list:{
		flex: 1,
		borderWidth: 1,
		borderColor: '#000',
		margin: 24
	},
	button:{
		margin: 24
	}
});
