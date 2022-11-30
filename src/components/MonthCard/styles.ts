import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginTop: '3%'
	},
  calendar:{
    borderColor: theme.colors.background,
    borderTopRadius: 20
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginBottom: 4,
  },
  title:{
    width: '47%',
    textAlign: 'center',
    marginHorizontal: "15%",
    fontFamily: theme.fonts.text900,
    fontSize: RFValue(18)
  },
  weeks:{
    flexDirection: 'row',
    height: '25%',
    backgroundColor: theme.colors.tabIcon
  },
  containerWeekItem:{
    width: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekItem:{
    fontFamily: theme.fonts.title700,
    fontSize: RFValue(16),
    color: theme.colors.tabColor
  },
  days:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  containerWeekDay:{
    width: 50,
    heigth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red"
  },
  dayItem:{
    fontFamily: theme.fonts.title500,
    fontSize: RFValue(16),
  },
  info:{
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  textInfo:{
    fontFamily: theme.fonts.title700,
    fontSize: RFValue(16),
    padding: 8,
    color: "#fff"
  },
  modal:{
    flex:1,
    marginHorizontal: "10%",
    marginVertical: "60%",
    borderWidth: 2,
    borderColor: theme.colors.tabColor,
		backgroundColor: theme.colors.background,
  },
  input:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around',
  }
});
