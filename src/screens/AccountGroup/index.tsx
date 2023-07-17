import React, { useState } from "react";
import { View } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { ListAthletes } from "../../components/ListAthletes";
import { categoriesAccounting } from "../../utils/categoriesAccounting";
import { CollectionGroup } from "../../components/CollectionGroup";
import { Values } from "../../components/Values";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";


export const AccountGroup = () => {

  const { tabIcon } = theme.colors;

  const { group, accounting } = useAuth();

	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
    categoryId === category ? setDisable(true) : (setCategory(categoryId), setDisable(false))
	}

	return (
    <Background>
      <CategorySelect
        data={categoriesAccounting}
        categorySelected={category}
        setCategory={handleCategorySelect}
        disable={disable}
      />
      <View style={styles.content}>
        {
          !category || category === "1"? <CollectionGroup data={accounting}/>
          :
            category === "2" ? <ListAthletes data={group} perfil={false} account={true}/>
          :
            (category === "3") && <Values data={group} />
        }
      </View>
      <View style={{height: 82, backgroundColor: tabIcon}}>
      </View>
    </Background>
	);
};
