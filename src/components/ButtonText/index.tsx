import React, { ReactNode } from "react";
import {
	BorderlessButton,
	BorderlessButtonProps,
} from "react-native-gesture-handler";
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & {
	children: ReactNode;
};

export const ButtonText = ({ children, ...rest }: Props) => {
	return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
};
