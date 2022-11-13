import React, { useState } from "react";
import { ScrollView, View } from "react-native";

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

  const { group } = useAuth();


	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setDisable(true) : (setCategory(categoryId), setDisable(false));
	}

	return (
			<Background>
				<CategorySelect
					data={categoriesGroup}
					categorySelected={category}
					setCategory={handleCategorySelect}
          disable={disable}
				/>
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
        <View style={{height: 82, backgroundColor: theme.colors.tabIcon}}>

        </View>
			</Background>
	);
};
