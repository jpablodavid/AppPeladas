import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary50, shadow} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		width: 125,
		height: 135,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: primary50,
	},
	
});
