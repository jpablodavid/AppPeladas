import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

type Props = {
	urlImage: string;
}

export const Avatar = ({urlImage} : Props) => {
	return (
		<View style={styles.container}>
			<Image style={styles.foto} source={{uri: urlImage}} />
		</View>
	);
};
