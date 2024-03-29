import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const {title700, text900} = theme.fonts;
const { tabColor, white, black} = theme.colors;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
  title:{
    fontSize: RFValue(24),
		fontFamily: title700,
    marginVertical: 4,
    textAlign: "center"
  },
  carrossel:{
    width: "90%",
    marginRight: 8,
  },
  containerItem:{
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: tabColor,
    borderRadius: 24,
    padding: 16,
    justifyContent: 'space-evenly'
  },
  content:{
    alignItems: 'flex-start',
  },
  label: {
		fontSize: RFValue(20),
		fontFamily: title700,
		marginRight: 8,
    marginVertical: 8,
    color: white
	},
  labelCarousel: {
		fontSize: RFValue(18),
		fontFamily: title700,
	},
  textCustos: {
		fontSize: RFValue(24),
		fontFamily: title700,
    color: 'red',
    marginVertical: 4
	},
  textArrecadacao: {
		fontSize: RFValue(24),
		fontFamily: title700,
    color: 'green',
    marginVertical: 4,
	},
  info:{
    width: "55%",
    backgroundColor: white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: black,
    padding: 4,
    paddingEnd: 8,
  },
	infoText:{
		fontSize: RFValue(16),
		fontFamily: text900,
    textAlign: "right",
	},
	demo: {
		flexDirection: "row",
    justifyContent: 'space-between',
    margin: 8
	},
  money:{
    flexDirection: "row",
		alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
