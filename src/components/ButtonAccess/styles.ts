import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { shadow, background, backgroundDark } = theme.colors;

export const styles = StyleSheet.create({
	container: {
    width: 160,
		borderRadius: 24,
		marginBottom: 16,
		paddingHorizontal: 8,
    paddingVertical: 8,
		borderWidth: 4,
		borderColor: background,
	},
	textsContainer: {
    marginLeft: 8,
	},
	title: {
		fontSize: 20,
		color: backgroundDark,
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		letterSpacing: 1,
	},
	text: {
		fontSize: 14,
		fontFamily: theme.fonts.title700,
    color: 'black',
	},
  icon: {
    paddingRight: 8,
    alignItems:"flex-end",
  }
});
