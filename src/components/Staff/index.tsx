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
};

type Props = {
	data: StaffProps;
  occupation : string;
};

export const Staff = ({ data, occupation }: Props) => {

	const { tabIcon, tabColor} = theme.colors;

  const { addStaff, user} = useAuth()

	const [textInput, setTextInput] = useState(data.userName);


	function handlerEdit() {
		addStaff(textInput, occupation, user.grupo_id);
    alert("ok");
	}

	return (
		<View>
			<Text style={styles.title}>{occupation}</Text>
			<LinearGradient start={[ 0.0, 0.0]} end={[1,0]} style={styles.container} colors={[tabIcon, tabColor]}>
				<Image style={styles.avatar} source={{ uri: data.avatar_url }} />
				<View style={styles.content}>
        {user.adm ?
          <View>
            <TextInput
              style={styles.input}
              value={textInput}
              onChangeText={setTextInput}
            />
            <TouchableOpacity style={styles.editButton} onPress={handlerEdit} >
              <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={styles.input}>
            <Text style={styles.text}>
              {textInput}
            </Text>
          </View>
					}
				</View>
			</LinearGradient>
		</View>
	);
};
