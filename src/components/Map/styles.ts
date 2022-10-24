import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  map: {
    marginTop: 16,
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').height - 460,
  },
  adress:{
    fontFamily: theme.fonts.text500,
    fontSize: 18,
    marginVertical: 4,
  },
  buttonsContainer:{
    width: 160,
    alignSelf: 'flex-end',
  }
});
