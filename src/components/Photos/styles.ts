import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  photo:{
    width: width / 3.63,
    height: 100,
  },
  button:{
    margin: 2,
  },
  modal:{
    flex: 1,
    marginTop: 150,
    marginBottom: 100,
    borderWidth: 2,
    borderColor: theme.colors.tabColor,
		backgroundColor: theme.colors.background,
  },
  photoCarrosel:{
    width: width - 8,
    height: 360,
    marginTop: 24
  },
  text:{
    margin: 8,
    fontFamily: theme.fonts.text500,
    fontSize: RFValue(16),
    color: "#fff"
  }
});
