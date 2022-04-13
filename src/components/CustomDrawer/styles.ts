import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: theme.colors.background10
	},
  menu:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar:{
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 24,
  },
  title:{
    fontSize: 30,
    fontFamily: theme.fonts.title700
  },
  content:{
    justifyContent: 'center',
  }

});
