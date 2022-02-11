import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { shadow, textButton} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 80,
		flexDirection: "row",
		marginTop: 8,
		justifyContent: 'space-around',
	},
	textsContainer: {
		width: "70%"
	},
	title: {
		fontSize: 24,
		color: textButton,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		letterSpacing: 1,
	},
	text: {
		fontSize: 14,
		fontFamily: theme.fonts.text500,
	},
	icon:{
		alignItems:'center',
		justifyContent: 'center',

	}
});
