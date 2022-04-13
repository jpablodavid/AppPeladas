import React, { useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
  disable?: boolean;
};

const { textButton, primary25} = theme.colors;

export const ButtonDrawer = ({ text, disable, ...rest }: Props) => {

  const [color, setColor] = useState('');

	return (
		<TouchableOpacity
    style={styles.button}
    onfocus={() => setColor("")}
    {...rest}
		>
			<Text style={[styles.text, { color: disable ? 'gray' : "black" }]}>{text}</Text>
		</TouchableOpacity>
	);
};
