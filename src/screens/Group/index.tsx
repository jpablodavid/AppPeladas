import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export const Group = () => {

  const navigation = useNavigation();

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
          !group ?
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
              <Text style={{flex: 0.3}}>
                Parece que é a sua primeira vez por aqui, então deixa eu te ajudar,
                para começar a usar o App Peladas você precisa estar em um grupo de peladas.
                Aqui você pode escolher entre entrar para um grupo ou criar um grupo
                e chamar os amigos para participar.
              </Text>
              <View style={{flex: 0.7, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity style={{flex: 1, backgroundColor: "#fff", margin: 16}} onPress={handleJoinGroup}>
                    <Text>conectar a um grupo</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row', margin: 16}} >
                  <TouchableOpacity style={{flex: 1,backgroundColor: "#fff"}} onPress={handleCreateGroup}>
                    <Text>Criar um grupo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )

        }

        <View style={{height: 80, backgroundColor: theme.colors.tabIcon}}>

        </View>
			</Background>
	);
};
