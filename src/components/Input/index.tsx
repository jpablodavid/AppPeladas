import React, { ReactNode, useState } from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	icon: ReactNode;
	placeholderText: string;
};

export const Input = ({ icon, placeholderText }: Props) => {
	const [textInput, setTextInput] = useState("");

	return (
		<View style={styles.container}>
			<View>
				{icon}
			</View>
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
