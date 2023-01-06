import React from "react";
import { View, Text, TouchableOpacity, Image, Linking} from "react-native";

import { Background } from "../../components/Background";

import { styles } from "./styles";

export const Msg = ({data}) => {

  function sendMsg(){
    Linking.openURL("http://api.whatsapp.com/send?phone=5521996317008")
  }

	return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity onPress={sendMsg}>
          <Image
            style={styles.icon}
            source={require("./../../assets/iconWhatsapp.png")}/>
          <Text style={styles.text}>Acessar o Grupo de Mensagens</Text>
        </TouchableOpacity>
      </View>
    </Background>
	);
};
