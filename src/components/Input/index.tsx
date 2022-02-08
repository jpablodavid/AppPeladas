import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	placeholderText: string;
};

export const Input = ({ placeholderText }: Props) => {
	const [textInput, setTextInput] = useState("");

	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name="email" size={24} color="black" />
			<TextInput
				style={styles.input}
				onChangeText={setTextInput}
				value={textInput}
				placeholder={placeholderText}
				placeholderTextColor={theme.colors.primary100}
				inlineImageLeft="search_icon"
			/>
		</View>
	);
};
