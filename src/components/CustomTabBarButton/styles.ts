import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { background, backgroundDark} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7f5df0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
	},
});
