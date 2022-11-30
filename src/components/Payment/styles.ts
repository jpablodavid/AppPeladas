import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

const {listName, primary100, secondary, tabColor, background} = theme.colors;
const {text900, title700, } = theme.fonts;

export const styles = StyleSheet.create({
  container: {
		flex: 1,
	},
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    marginBottom: 16,
  },
  title:{
    fontFamily: theme.fonts.text900,
    fontSize: RFValue(24)
  },
  months:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  containerItemMonth: {
    width: '30%',
    height: "20%",
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  itemMonth:{
    fontFamily: theme.fonts.title700,
    fontSize: RFValue(19),
    margin: 8
  },
  legendContainer:{

  },
  legend:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  boxColor:{
    width: 50,
    height: 25,
    borderRadius: 6,
  },
  text:{
    fontSize: RFValue(16),
    color: "#fff",
    marginHorizontal: 16
  }
});
