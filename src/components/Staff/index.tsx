import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity} from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../hooks/auth";

export type StaffProps = {
	id: string;
	userName: string;
	avatar_url: string;
	occupation: string;
};

type Props = {
	data: StaffProps;
};

export const Staff = ({ data }: Props) => {

	const { tabIcon, tabColor} = theme.colors;

  const { addStaff, user} = useAuth()

	const [textInput, setTextInput] = useState(data.userName);

	const isAdm = true;

	function handlerEdit() {
		addStaff(textInput, data.occupation, user.grupo_id);
    alert("ok");
	}

	return (
		<View>
			<Text style={styles.title}>{data.occupation}</Text>
			<LinearGradient start={[ 0.0, 0.0]} end={[1,0]} style={styles.container} colors={[tabIcon, tabColor]}>
				<Image style={styles.avatar} source={{ uri: data.avatar_url }} />
				<View style={styles.content}>
					<TextInput
						style={styles.input}
						value={textInput}
            onChangeText={setTextInput}
          />
					{isAdm && (
						<TouchableOpacity style={styles.editButton} onPress={handlerEdit} >
							<Text style={styles.textButton}>Editar</Text>
						</TouchableOpacity>
					)}
				</View>
			</LinearGradient>
		</View>
	);
};
