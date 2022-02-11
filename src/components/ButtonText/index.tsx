import React, { ReactNode } from "react";
import {
	BorderlessButton,
	BorderlessButtonProps,
} from "react-native-gesture-handler";

type Props = BorderlessButtonProps & {
	children: ReactNode;
};

export const ButtonText = ({ children, ...rest }: Props) => {
	return <BorderlessButton {...rest}>{children}</BorderlessButton>;
};
