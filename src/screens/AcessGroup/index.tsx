import React, { useState } from "react";
import { View, Text} from "react-native";

import { Header } from "../../components/Header";
import { CategoriesBackground } from "../../components/CategoriesBackground";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesGroup } from "../../utils/categoriesGroup";

import { styles } from "./styles";
import { ListStaff } from "../../components/ListStaff";
import { ListAthletes } from "../../components/ListAthletes";
import { ListInfo } from "../../components/ListInfo";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";


export const AcessGroup = () => {

  const { group } = useAuth();

	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setDisable(true) : (setCategory(categoryId), setDisable(false));
	}

	return (
		<View style={styles.container}>
			<Header goBack={handleGoBack} title={group.name} />
			<CategoriesBackground>
				<View style={{ height: 16 }}></View>
				<CategorySelect
					data={categoriesGroup}
					categorySelected={category}
					setCategory={handleCategorySelect}
          disable={disable}
				/>
				<View style={styles.content}>
        {
            category === "1" ? <ListStaff data={group} />
            :
              category === "2" ? <ListInfo data={group} />
            :
              category === "3" ? <View><Text>3</Text></View>
            :
              category === "4" ? <ListAthletes data={group}/>
            :
              category === "5" ? <ListAthletes data={group}/>
            :
              <View><Text>6</Text></View>
          }
				</View>
			</CategoriesBackground>
		</View>
	);
};
