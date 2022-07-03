import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  map: {
    marginTop: 16,
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').height - 500,
  }
});
