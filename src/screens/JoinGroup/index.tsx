import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { ButtonText } from "../../components/ButtonText";

import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../components/Button";

type Props = {
	listGroup: string;
};

export const JoinGroup = ({ listGroup }: Props) => {
	const [nameGroup, setNameGroup] = useState("");

	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	function handleSearch(){
		alert("pesquisar");
	}

	function handleConnectGroup() {
		alert("conectar");
	}

	return (
		<View style={styles.container}>
			<ButtonText style={styles.goBack} onPress={handleGoBack}>
				<Entypo name="chevron-left" size={24} color="black" />
			</ButtonText>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					Digite o nome do grupo ao qual você deseja entrar
				</Text>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={setNameGroup}
					value={nameGroup}
					inlineImageLeft="search_icon"
				/>
				<TouchableOpacity onPress={handleSearch}>
					<Ionicons name="md-search-sharp" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.list}>{listGroup}</ScrollView>
			<View style={styles.button}>
				<Button text={"Entrar no grupo"} onPress={handleConnectGroup} />
			</View>
		</View>
	);
};
