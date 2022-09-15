import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import { CategoriesBackground } from "../../components/CategoriesBackground";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesAccounting } from "../../utils/categoriesAccounting";
import { AccountingGroup } from "../../components/AccountingGroup";
import { ListAthletesPayment } from "../../components/ListAthletesPayment";
import { Values } from "../../components/Values";

import { styles } from "./styles";

const meses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'
]

export const Accounting = () => {

  const { group } = useAuth();

	const navigation = useNavigation();

	function handleGoBack() {
		navigation.navigate("Group");
	}

	const [category, setCategory] = useState("");
  const [disable, setDisable] = useState(false);

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setDisable(true) : (setCategory(categoryId), setDisable(false));
	}

	return (
		<View style={styles.container}>
			<CategoriesBackground>
				<View style={{ height: 16 }}></View>
				<CategorySelect
					data={categoriesAccounting}
					categorySelected={category}
					setCategory={handleCategorySelect}
          disable={disable}
				/>
				<View style={styles.content}>
          {
            category === "1" ? <AccountingGroup data={meses} />
            :
              category === "2" ? <ListAthletesPayment data={group}/>
            :
              (category === "3") && <Values data={group}/>
          }
				</View>
			</CategoriesBackground>
		</View>
	);
};
