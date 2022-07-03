import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { shadow, textButton } = theme.colors;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
  scroll:{
    flex: 1,
  },
	label: {
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		marginVertical: 4,
		textAlign: "center",
	},
  calendario: {
    flexDirection: "row",
    alignItems: 'stretch',
  },
  setas: {
    justifyContent: "center",
    alignItems: "center",
  },
  mes: {
    width: 280,
    height: 160,
		borderRadius: 16,
		marginBottom: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: "space-between",
		backgroundColor: theme.colors.listName,
		paddingTop: 16,
		shadowColor: shadow,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		borderWidth: 1,
		borderColor: textButton,
  },
	infoText:{
		fontSize: 18,
		fontFamily: theme.fonts.text900,
		color: theme.colors.secondary,
		paddingBottom: 2,
    marginLeft: 16
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
  },
  labelAdd: {
		fontSize: 22,
		fontFamily: theme.fonts.title700,
		marginVertical: 4,
		textAlign: "center",
    borderTopColor: theme.colors.disable100,
    borderTopWidth: 2,
    paddingTop: 16,
	},
  modal:{
    flex: 1,
    marginVertical: 64,
    marginHorizontal: 24,
		padding: 16,
		backgroundColor: theme.colors.background10,
		borderRadius: 25
  },
  labelModal: {
		fontSize: 22,
		fontFamily: theme.fonts.title700,
		marginVertical: 4,
		textAlign: "center",
    borderColor: theme.colors.disable100,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 8,
	},
  mostrar:{
    height: 32,
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: theme.colors.shadow,
    borderRadius: 10,
    padding: 2,
  },
  mostrarContent: {
    color: theme.colors.textButton,
    fontSize: 20,
    fontFamily: theme.fonts.text900
  },
  buttonModal:{
    margin: 16,
  },
  descricao: {
    height: 100,
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
  },
  descricaoContent: {
    fontSize: 20,
    fontFamily: theme.fonts.text500
  },
});
