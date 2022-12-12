import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { ListAthletes } from "../../components/ListAthletes";
import { categoriesAccounting } from "../../utils/categoriesAccounting";
import { CollectionGroup } from "../../components/CollectionGroup";
import { Months } from "../../utils/collectionMonths";
import { Values } from "../../components/Values";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
	title: string;
};


export const AccountGroup = ({ title }: Props) => {

  const {tabIcon} = theme.colors;

  const { group } = useAuth();

	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		/* categoryId === category ? setCategory("") : setCategory(categoryId); */
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
          !category || category === "1"? <CollectionGroup data={Months} />
          :
            category === "2" ? <ListAthletes data={group} perfil={false}/>
          :
            (category === "3") && <Values data={group} />
        }
      </View>
      <View style={{height: 82, backgroundColor: tabIcon}}>
      </View>
    </Background>
	);
};
