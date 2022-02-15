import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		height: 60,
		borderRadius: 8,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderColor: "#ddd",
		textAlign: 'center',
		fontSize: 18,
		fontFamily: theme.fonts.text500,
	},
});
