import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { categoriesGroup } from "../../utils/categoriesGroup";

import { ListStaff } from "../../components/ListStaff";
import { ListAthletes } from "../../components/ListAthletes";
import { ListInfo } from "../../components/ListInfo";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import { Map } from "../../components/Map";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { Gallery } from "../../components/Gallery";
import { Calendar } from "../../components/Calendar";

export const AcessGroup = () => {

  const { group } = useAuth();

	const navigation = useNavigation();

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
            category === "1" ? <ListStaff data={group} />
            :
              category === "2" ? <ListInfo data={group} />
            :
              category === "3" ? <Map data={group}/>
            :
              category === "4" ? <ListAthletes data={group} perfil={true}/>
            :
              category === "5" ? <Gallery data={group}/>
            :
              (category === "6") && <Calendar data={group}/>
          }
				</ScrollView>
        <View style={{height: 82, backgroundColor: theme.colors.tabIcon}}>

        </View>
			</Background>
	);
};
