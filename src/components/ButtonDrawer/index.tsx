import React, { useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
  disable?: boolean;
};

export const ButtonDrawer = ({ text, disable, ...rest }: Props) => {

  const { black, line} = theme.colors;

  const [color, setColor] = useState('');

	return (
		<TouchableOpacity
    style={styles.button}
    onFocus={() => setColor("")}
    {...rest}
		>
			<Text style={[styles.text, { color: disable ? line : black }]}>{text}</Text>
		</TouchableOpacity>
	);
};
