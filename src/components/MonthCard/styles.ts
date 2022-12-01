import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { background, tabIcon, tabColor } = theme.colors;
const { title700, text900 } = theme.fonts;

export const styles = StyleSheet.create({
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
    height: 50,
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
  },
  containerWeekDay:{
    width: 52,
    heigth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red"
  },
  dayItem:{
    fontFamily: title700,
    fontSize: RFValue(18),
    marginBottom: 4
  },
});
