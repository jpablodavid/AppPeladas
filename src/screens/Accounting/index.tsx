import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import { CategorySelect } from "../../components/CategorySelect";
import { categoriesAccounting } from "../../utils/categoriesAccounting";
import { Values } from "../../components/Values";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { ListStaff } from "../../components/ListStaff";
import { ListInfo } from "../../components/ListInfo";
import { Calendar } from "../../components/Calendario";

const meses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'
]

export const Accounting = () => {

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
					data={categoriesAccounting}
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
              (category === "6") && <Calendar data={group}/>
          }
				</ScrollView>
        <View style={{height: 82, backgroundColor: theme.colors.tabIcon}}>

        </View>
			</Background>
	);
};
