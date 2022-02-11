import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		height: 360,
		backgroundColor: theme.colors.background10,
		borderTopLeftRadius: 25,
	},
});
