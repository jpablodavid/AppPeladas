import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesAccounting } from "../../utils/categoriesAccounting";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

import { theme } from "../../global/styles/theme";
import { ListInfo } from "../../components/ListInfo";
import { ListStaff } from "../../components/ListStaff";
import { Calendar } from "../../components/Calendar";
import { ListAthletes } from "../../components/ListAthletes";
import { ListAthletesPayment } from "../../components/ListAthletesPayment";

type Props = {
	title: string;
};

export const AccountGroup = ({ title }: Props) => {

  const { group } = useAuth();

	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
    <Background>
      <CategorySelect
        data={categoriesAccounting}
        categorySelected={category}
        setCategory={handleCategorySelect}
        disable={disable}
      />
      <ScrollView style={styles.content}>
        {
          category === "1" ? <ListStaff data={group} />
          :
            category === "2" ? <ListAthletes data={group} perfil={false}/>
          :
            (category === "3") && <Calendar data={group}/>
        }
      </ScrollView>
      <View style={{height: 82, backgroundColor: theme.colors.tabIcon}}>

      </View>
    </Background>
	);
};
