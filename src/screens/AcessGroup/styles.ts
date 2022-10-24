import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	content: {
    flex: 1,
		backgroundColor: theme.colors.tabIcon,
		borderTopRightRadius: 36,
		paddingHorizontal: 16,
		paddingVertical: 4,
	},
});
