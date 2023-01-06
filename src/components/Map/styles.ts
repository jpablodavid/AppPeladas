import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { white } = theme.colors;
const { text500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  map: {
    marginTop: 16,
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').height - 460,
  },
  address:{
    fontFamily: text500,
    fontSize: RFValue(18),
    marginVertical: 4,
    color: white
  },
  buttonsContainer:{
    width: 160,
    alignSelf: 'flex-end',
  },
  search:{
    marginTop: 16,
  }
});
