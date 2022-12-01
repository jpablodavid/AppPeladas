import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const {tabIcon} = theme.colors;

export const styles = StyleSheet.create({
	content: {
    flex: 1,
		backgroundColor: tabIcon,
		borderTopRightRadius: 36,
		paddingHorizontal: 16,
		paddingVertical: 4,
	},
});
