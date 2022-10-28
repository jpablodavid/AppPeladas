import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
	},
  title:{
    fontSize: 24,
		fontFamily: theme.fonts.title700,
    marginVertical: 8,
    textAlign: "center"
  },
  carrossel:{

  },
  containerItem:{
    borderWidth: 3,
    borderColor: theme.colors.tabColor,
    alignItems: 'center',
    borderRadius: 24
  },
  label: {
		fontSize: 18,
		fontFamily: theme.fonts.title700,
		marginRight: 8,
    marginVertical: 8,
	},
  info:{
    width: "40%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
    padding: 4,
    paddingEnd: 16,
  },
	infoText:{
		fontSize: 16,
		fontFamily: theme.fonts.text900,
		color: theme.colors.secondary,
    textAlign: "right",
	},
	money: {
		flexDirection: "row",
		alignItems: 'center',
	},

});
