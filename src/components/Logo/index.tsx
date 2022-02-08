import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

export const Logo = () => {
	
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require("../../assets/logo.png")} />
		</View>
	);
};
