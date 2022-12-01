import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

const { white } = theme.colors;
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
    fontFamily: text900,
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
    fontFamily: title700,
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
    color: white,
    marginHorizontal: 16
  }
});
