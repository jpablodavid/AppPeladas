import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const { tabIcon, disable100, secondary, tabColor, modal, white, shadow, invisible } = theme.colors;
const { text500, text900, title700 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
  content: {
    flex: 1,
  },
  title:{
    fontSize: RFValue(20),
		fontFamily: text900,
  },
  containerLabel:{
    alignItems: "flex-end",
  },
	label: {
		fontSize: RFValue(18),
		fontFamily: text500,
		marginVertical: 4,
	},
  values:{
    width: '42%',
    alignItems: 'flex-end',
  },
  calendario: {
    flexDirection: "row",
    alignItems: 'stretch',
  },
  setas: {
    justifyContent: "center",
    alignItems: "center",
  },
	infoText:{
		fontSize: RFValue(18),
		fontFamily: title700,
		color: tabColor,
		paddingBottom: 2,
	},
	money: {
    marginHorizontal: 16,
		flexDirection: "row",
		alignItems: 'center',
    justifyContent: "space-between"
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
  button:{
    width: '40%',
    paddingTop: 8,
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
  edit: {
    width: "20%",
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: secondary,
    borderRadius: 6,
    marginEnd: 36
	},
  editText: {
    fontSize: RFValue(14),
		letterSpacing: 1,
		color: white,
		fontFamily: title700,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
  },
  input:{
    backgroundColor: white,
    textAlign: "center",
    fontSize: RFValue(18),
		fontFamily: title700,
    borderRadius: 8
  },
  inputEdit:{
    backgroundColor: invisible,
    fontSize: RFValue(18),
    color: tabColor,
		fontFamily: title700,
    borderRadius: 8
  },
  inputArea:{
    height: 100,
    textAlignVertical: "top",
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: white,
    borderRadius: 10,
    padding: 8,
    fontSize: RFValue(16),
    fontFamily: text500
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
  descricaoContent: {
    fontSize: RFValue(20),
    fontFamily: text500
  },
});
