import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { white } = theme.colors;
const { title700 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 24,
    marginBottom: 8
	},
	informationText: {
    marginTop: 60,
    marginBottom: 16,
		fontSize: RFValue(24),
		fontFamily: title700,
		color: white
	},
	inputContainer: {
		marginBottom: 16,
	},
	inputLastContainer: {
		marginBottom: 32,
	},
  buton:{
    width: '70%',
  }
});
