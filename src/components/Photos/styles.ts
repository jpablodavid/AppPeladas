import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  photo:{
    width: 106,
    height: 110,
  },
  button:{
    margin: 4,
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
    fontSize: 16,
    color: "#fff"
  }
});
