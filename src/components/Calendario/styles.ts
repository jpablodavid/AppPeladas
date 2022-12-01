import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { background, tabIcon, tabColor } = theme.colors;
const { title500, title700, text900 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginTop: '3%'
	},
  calendar:{
    borderColor: background,
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
    fontFamily: text900,
    fontSize: RFValue(18)
  },
  weeks:{
    flexDirection: 'row',
    height: '12%',
    backgroundColor: tabIcon
  },
  containerWeekItem:{
    width: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekItem:{
    fontFamily: title700,
    fontSize: RFValue(16),
    color: tabColor
  },
  days:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  containerWeekDay:{
    width: "13%",
    height: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  dayItem:{
    fontFamily: title500,
    fontSize: RFValue(16),
  },
  info:{
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  textInfo:{
    fontFamily: title700,
    fontSize: RFValue(16),
    padding: 8,
    color: "#fff"
  },
  modal:{
    flex:1,
    marginHorizontal: "10%",
    marginVertical: "60%",
    borderWidth: 2,
    borderColor: tabColor,
		backgroundColor: background,
  },
  input:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around',
  }
});
