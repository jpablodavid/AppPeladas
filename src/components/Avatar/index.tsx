import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

type Props = {
	urlImage: string;
};

export const Avatar = ({ urlImage }: Props) => {

	return <Image style={styles.container} source={{ uri: urlImage }} />;

};
