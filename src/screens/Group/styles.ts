import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	avatar: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
  button:{
    marginHorizontal: 48,
    marginBottom: 80
  },
	content: {
		height: 400,
		borderTopLeftRadius: 25,
		paddingHorizontal: 32,
		justifyContent: "space-around",
		paddingVertical: 32,
	},
});
