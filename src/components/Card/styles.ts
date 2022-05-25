import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100, line, shadow, background10 } = theme.colors;
const { text500, text900,title700} = theme.fonts;

export const styles = StyleSheet.create({

	card: {
		flex: 1,
		marginHorizontal: 32,
		marginBottom: 16,
		borderRadius: 25,
		overflow: "hidden",
	},
	perfil: {
		flex: 1,
		flexDirection: 'row',
	},
	range: {
		width: 68,
		height: "100%",
		marginLeft: 32,
		alignItems: "center",
		paddingTop: 8,
	},
	camisa: {
		fontSize: 40,
		fontFamily: text900,
		color: line,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	position: {
		fontSize: 28,
		fontFamily: text500,
		color: line,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		marginBottom: 16,
		textTransform: "uppercase",
	},
	bandeira: {
		width: 48,
		height: 34,
		zIndex: 1,
	},
	avatar:{
    margin: 16,
		width: 200,
		height: 200,
		position: "relative",
		top: 0,
		left: 0,
	},
	scout: {
		flex: 1,
		borderWidth: 1,
		borderColor: primary100,
		alignItems: "center",
	},
	name: {
		width: "80%",
		borderBottomColor: line,
		borderBottomWidth: 1,
		marginBottom: 12,
	},
	textName: {
		fontSize: 40,
		fontFamily: title700,
		textTransform: "uppercase",
		textAlign: "center",
		color: background10,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	info: {
		flexDirection: "row",
	},
	progress: {
		flex: 1,
		borderRightWidth: 1,
		borderRightColor: line,
	},
	data: {
		flex: 1,
		paddingLeft: 16,
	},
	textData: {
		fontSize: 24,
		fontFamily: text500,
		color: background10,
		textShadowColor: shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	icons:{
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: 32,
		justifyContent: 'space-between',
		marginBottom: 16,
	}
});
