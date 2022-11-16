import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { shadow, background, backgroundDark, tabColor, tabIcon } = theme.colors;

export const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
		borderRadius: 24,
    marginHorizontal: 4,
		padding: 8,
		borderWidth: 4,
    backgroundColor: tabIcon,
		borderColor: tabColor,
	},
	title: {
		fontSize: RFValue(20),
		color: 'white',
		fontFamily: theme.fonts.title700,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		letterSpacing: 1,
	},
  icon: {
    alignItems:"flex-end",
  }
});
