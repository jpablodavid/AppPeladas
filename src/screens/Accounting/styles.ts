import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		height: 420,
		backgroundColor: theme.colors.background10,
		borderTopLeftRadius: 25,
		paddingHorizontal: 16,
		paddingTop: 4,
	},
});
