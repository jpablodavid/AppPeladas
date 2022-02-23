import React from "react";
import { Image, View } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	urlImage: string;
};

export const Avatar = ({ urlImage }: Props) => {
	const { primary100, secondary } = theme.colors;

	return <Image style={styles.container} source={{ uri: urlImage }} />;
};
