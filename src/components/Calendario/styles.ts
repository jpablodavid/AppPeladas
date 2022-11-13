import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginVertical: 16,
	},
  calendar:{
    borderColor: theme.colors.background,
    borderTopRadius: 20
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingHorizontal: 16,
    marginBottom: 8
  },
  title:{
    fontFamily: theme.fonts.text900,
    fontSize: 18,
  },
  content:{
    width: 357,
  },
  weeks:{
    flexDirection: 'row',
  },
  containerWeekItem:{
    width: 51,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.tabIcon
  },
  weekItem:{
    fontFamily: theme.fonts.title700,
    fontSize: 16,
    color: theme.colors.tabColor
  },
  days:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  containerWeekDay:{
    width: 51,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.background,
  },
  dayItem:{
    fontFamily: theme.fonts.title500,
    fontSize: 16,
  },
  info:{
    marginTop: 8,
    backgroundColor: "#fff",
    height: 80,
    borderWidth: 2,
    borderColor: theme.colors.background,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  textInfo:{
    fontFamily: theme.fonts.title700,
    fontSize: 16,
    padding: 8,
    color: "red"
  }
});
