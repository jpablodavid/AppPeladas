import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
		flex: 1,
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 20,
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
		fontSize: RFValue(24),
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
		fontSize: RFValue(22),
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
  modal:{
    flex: 1,
    marginTop: 120,
    marginHorizontal: 8,
    marginBottom: 82,
    borderWidth: 2,
    borderColor: theme.colors.tabColor,
		padding: 16,
		backgroundColor: theme.colors.background,
		borderRadius: 25
  },
});
