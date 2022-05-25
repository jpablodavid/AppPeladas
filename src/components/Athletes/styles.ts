import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
		flex: 1,
		height: 80,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		marginBottom: 8,
		overflow: "hidden",
	},
	number: {
		width: 60,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.listName,
		marginRight: 1,
	},
	textNumber: {
		fontSize: 26,
		fontFamily: theme.fonts.text900,
		color: theme.colors.primary100,
	},
	name: {
		flex: 1,
		height: 80,
		flexDirection: "row",
		backgroundColor: theme.colors.listName,
		alignItems: "center",
		justifyContent: "space-between",
		padding: 16,
	},
  exclude: {
		height: 80,
		flexDirection: "row",
		backgroundColor: theme.colors.listName,
		alignItems: "center",
		justifyContent: "space-between",
		padding: 16,
		borderBottomEndRadius: 8,
		borderTopEndRadius: 8,
  },
	textName: {
		fontSize: 22,
		fontFamily: theme.fonts.title700,
	},
	excludesButton: {
		width: 30,
		height: 30,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.secondary,
	},
	textButton: {
		fontSize: 20,
		fontFamily: theme.fonts.title700,
	},
});
