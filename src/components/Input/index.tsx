import React, { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = TextInputProps & {
	icon: ReactNode;
	placeholderText: string;
};

export const Input = ({ icon, placeholderText, ...rest }: Props) => {
	return (
		<View style={styles.container}>
			<View>{icon}</View>
			<TextInput
				style={styles.input}
				placeholder={placeholderText}
				placeholderTextColor={theme.colors.disable100}
				inlineImageLeft="search_icon"
				{...rest}
			/>
		</View>
	);
};
