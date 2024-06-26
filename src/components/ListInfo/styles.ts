import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { tabColor,  tabColorFocused, white,  invisible, modal, disable100 } = theme.colors;
const { title700, text900, text500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
	label: {
		fontSize: RFValue(20),
		fontFamily: title700,
		marginRight: 8,
    marginVertical: 2,
	},
	infoText:{
		fontSize: RFValue(18),
		fontFamily: text900,
		color: tabColor,
		paddingBottom: 2,
	},
	money: {
		flexDirection: "row",
		alignItems: 'center',
    marginBottom: 8,
	},
	button:{
		width: 150,
		height: 36,
		borderRadius: 8,
		backgroundColor: theme.colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 16,
		marginTop: 8,
	},
	textButton:{
		fontSize: RFValue(22),
		fontFamily: title700,
		color: white
	},
  title:{
    fontSize: RFValue(20),
		fontFamily: text900,
  },
  inputEdit:{
    backgroundColor: invisible,
    fontSize: RFValue(18),
		fontFamily: text900,
		color: tabColor,
		paddingBottom: 2,
  },
  socialMedia:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  itemSocialMedia:{
    borderRadius: 8,
    backgroundColor:  tabColorFocused,
  },
  modal:{
    flex: 1,
    marginTop: 140,
    marginHorizontal: 8,
    marginBottom: 120,
    borderWidth: 2,
    borderColor: tabColor,
		padding: 16,
		backgroundColor: modal,
		borderRadius: 25
  },
  close:{
    marginBottom: 8,
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  labelModal: {
		fontSize: RFValue(22),
		fontFamily: text900,
		marginVertical: 8,
		textAlign: "center",
    borderColor: disable100,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 8,
	},
  input:{
    backgroundColor: white,
    textAlign: "center",
    fontSize: RFValue(18),
		fontFamily: title700,
    borderRadius: 8
  },
  mostrar:{
    height: 32,
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 10,
    padding: 2,
  },
  mostrarContent: {
    color: tabColor,
    fontSize: RFValue(20),
    fontFamily: text500
  },
  buttonModal:{
    margin: 16,
  },
  valores: {
    flexDirection: "row",
		alignItems: 'center',
    justifyContent: "space-evenly"
  },
  labelAdd: {
		fontSize: RFValue(20),
		fontFamily: text900,
		marginTop: 24,
    marginBottom: 8,
		textAlign: "center",
    borderTopColor: disable100,
    borderTopWidth: 2,
    paddingTop: 8,
	},
});
