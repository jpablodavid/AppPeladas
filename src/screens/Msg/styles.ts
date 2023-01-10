import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { white } = theme.colors;
const { title700 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
    flex: 1,
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center"
	},
  icon:{
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  text:{
    marginTop: 16,
    fontFamily: title700,
		color: white,
		fontSize: RFValue(18),
  },
  button:{
    width: "50%",
    marginTop: 32,
  }
});
