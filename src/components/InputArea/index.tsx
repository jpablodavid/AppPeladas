import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type Props = TextInputProps &{
	size?: string
};

export const InputArea = ({size, ...rest }: Props) => {
	return <TextInput style={[styles.container, { height: size}]} {...rest} />;
};
