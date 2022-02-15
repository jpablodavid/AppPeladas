import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: 64,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 8,
		borderRadius: 8,
	},
	title: {
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		marginVertical: 4,
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 8,
	},
	content: {
		flex: 1,
		marginLeft: 8,
	},
	input: {
		height: 24,
		backgroundColor: "#fff",
		borderRadius: 8,
		paddingHorizontal: 8,
		marginBottom: 4,
	},
	editButton: {
		width: 48,
		height: 15,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.background10,
		alignSelf: 'flex-end',
	},
	textButton: {
		fontSize: 12,
		fontFamily: theme.fonts.text500,
	},
});
