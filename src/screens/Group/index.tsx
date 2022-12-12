import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image} from "react-native";

import { useAuth } from "../../hooks/auth";

import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { ListStaff } from "../../components/ListStaff";
import { ListAthletes } from "../../components/ListAthletes";
import { ListInfo } from "../../components/ListInfo";
import { Map } from "../../components/Map";
import { Gallery } from "../../components/Gallery";
import { Calendario } from "../../components/Calendario";
import { categoriesGroup } from "../../utils/categoriesGroup";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export const Group = ({navigation}) => {

  const { tabIcon } = theme.colors;

  const { group } = useAuth();

	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setDisable(true) : (setCategory(categoryId), setDisable(false));
	}

  function handleCreateGroup(){
    navigation.navigate('CreateGroup');
  }

  function handleJoinGroup(){
    navigation.navigate('JoinGroup');
  }

	return (
    <Background>
      <CategorySelect
        data={categoriesGroup}
        categorySelected={category}
        setCategory={handleCategorySelect}
        disable={disable}
      />
      {
        group ?
        (
          <ScrollView style={styles.content}>
            {
              !category || category === "1" ? <ListInfo data={group} />
              :
                category === "2" ? <ListStaff data={group} />
              :
                category === "3" ? <Map data={group}/>
              :
                category === "4" ? <ListAthletes data={group} perfil={true}/>
              :
                category === "5" ? <Gallery data={group}/>
              :
                (category === "6") && <Calendario data={group}/>
            }
          </ScrollView>
        )
        :
        (
          <View style={styles.content}>
            <Text style={styles.text}>
              Parece que é a sua primeira vez por aqui, então deixa eu te ajudar.
              para começar a usar o App Peladas você precisa estar em um grupo de peladas.
              Selecione uma das opções.
            </Text>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.button} onPress={handleCreateGroup}>
                <Image style={styles.image} source={require("../../assets/3d.png")} />
                <Text style={styles.title}>Criar Grupo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleJoinGroup}>
                <Image style={styles.image} source={require("../../assets/3d.png")} />
                <Text style={styles.title}>Entrar No Grupo</Text>
              </TouchableOpacity>
            </View>
          </View>
        )

      }
      <View style={{height: 80, backgroundColor: tabIcon}}/>
    </Background>
	);
};
