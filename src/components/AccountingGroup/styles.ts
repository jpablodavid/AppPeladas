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
		textAlign: "center"
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
		flexDirection: "row",
		alignItems: 'center',
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
		fontSize: 20,
		fontFamily: theme.fonts.title700,
		color: theme.colors.textButton
	}
});
