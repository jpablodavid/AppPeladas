import React from "react";
import { View, Text, TouchableOpacity, Image, Linking} from "react-native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export const Msg = () => {

  const { group, user} = useAuth();

  function sendMsg(){
    Linking.openURL("http://api.whatsapp.com/send?phone=5521996317008");
  }

	return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={sendMsg}
          disabled={group.grupoWhatsapp ? false : true}
        >
          <Image
            style={styles.icon}
            source={require("./../../assets/iconWhatsapp.png")}
          />
          {
            group.grupoWhatsapp ?
              <Text style={styles.text}>Acessar o Grupo de Mensagens</Text>
            :
              <Text style={styles.text}>Seu Grupo Não possui um canal de mensagens</Text>
          }
        </TouchableOpacity>
        <View style={styles.button}>
        {
          user.adm && !group.grupoWhatsapp &&
            <Button color={"green"} text={"Criar um Grupo"} onPress={sendMsg}/>
        }
        </View>
      </View>
    </Background>
	);
};
