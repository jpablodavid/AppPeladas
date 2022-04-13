import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	checked?: boolean;
};

export const ItemListGroup = ({
	title,
	checked,
	...rest
}: Props) => {
	return (
		<TouchableOpacity {...rest} activeOpacity={1} style={[styles.container,  { opacity: checked ? 0.4 : 1 } ]}>
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
        {
          checked ?
            <View style={styles.boxChecked}></View>
          :
            <View></View>
        }
			</View>
		</TouchableOpacity>
	);
};
