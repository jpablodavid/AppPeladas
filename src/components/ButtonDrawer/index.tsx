import React, { useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
  disable?: boolean;
};

export const ButtonDrawer = ({ text, disable, ...rest }: Props) => {

  const [color, setColor] = useState('');

	return (
		<TouchableOpacity
    style={styles.button}
    onFocus={() => setColor("")}
    {...rest}
		>
			<Text style={[styles.text, { color: disable ? 'gray' : "black" }]}>{text}</Text>
		</TouchableOpacity>
	);
};
