import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { primary100 } = theme.colors;
const { title700, title500 } = theme.fonts;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	goBack: {
		margin: 16,
		marginTop: 32,
	},
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
		fontFamily: theme.fonts.text900,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	position: {
		fontSize: 28,
		fontFamily: theme.fonts.text500,
		color: theme.colors.line,
		textShadowColor: theme.colors.shadow,
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
		width: 200,
		height: 200,
		position: "relative",
		top: 0,
		left: 0,
	},
	scout: {
		flex: 1,
		borderWidth: 1,
		borderColor: theme.colors.primary100,
		alignItems: "center",
	},
	name: {
		width: "80%",
		borderBottomColor: theme.colors.line,
		borderBottomWidth: 1,
		marginBottom: 12,
	},
	textName: {
		fontSize: 40,
		fontFamily: theme.fonts.title700,
		textTransform: "uppercase",
		textAlign: "center",
		color: theme.colors.background10,
		textShadowColor: theme.colors.shadow,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	info: {
		flexDirection: "row",
	},
	progress: {
		flex: 1,
		borderRightWidth: 1,
		borderRightColor: theme.colors.line,
	},
	data: {
		flex: 1,
		paddingLeft: 16,
	},
	textData: {
		fontSize: 30,
		fontFamily: theme.fonts.text500,
		color: theme.colors.background10,
		textShadowColor: theme.colors.shadow,
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
