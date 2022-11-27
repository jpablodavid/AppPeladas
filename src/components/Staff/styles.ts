import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

const {secondary} = theme.colors;
const { title700, text500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		height: 64,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 8,
		borderRadius: 8,
	},
	title: {
		fontSize: RFValue(20),
		fontFamily: title700,
		marginVertical: 4,
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 8,
	},
	content: {
		flex: 1,
		marginLeft: 8,
	},
	input: {
		height: 24,
		backgroundColor: "#fff",
		borderRadius: 5,
		paddingHorizontal: 8,
		marginBottom: 4,
	},
	editButton: {
		width: "20%",
		height: "30%",
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: secondary,
		alignSelf: 'flex-end',
	},
	textButton: {
		fontSize: RFValue(12),
		fontFamily: text500,
	},
});
