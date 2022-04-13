import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.primary25,
    padding: 4,
    marginBottom: 8,
	},
	content: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 8,
	},
	title: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    textTransform: "uppercase"
	},
  boxChecked:{
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: theme.colors.secondary
  }
});
