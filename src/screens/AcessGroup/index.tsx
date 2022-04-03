import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { CategoriesBackground } from "../../components/CategoriesBackground";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesGroup } from "../../utils/categoriesGroup";

import { styles } from "./styles";
import { ListStaff } from "../../components/ListStaff";
import { ListAthletes } from "../../components/ListAthletes";
import { ListInfo } from "../../components/ListInfo";
import { useNavigation } from "@react-navigation/native";

const info = {
	id: "1",
	name: "Amendoeira",
	dayWeek: "Sexta-Feira",
	time: "08",
	valorMensal: "50",
	valorConvidado: "20",
	local: "Rua: ivinheima, 368 - bento ribeiro campo do sapê",
};

export const AcessGroup = () => {

	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	const [category, setCategory] = useState("");

	/* function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	} */

	return (
		<View style={styles.container}>
			<Header goBack={handleGoBack} title={"Nome Group"} />
			<CategoriesBackground>
				<View style={{ height: 16 }}></View>
				{/* <CategorySelect
					data={categoriesGroup}
					categorySelected={category}
					setCategory={handleCategorySelect}
				/> */}
				<View style={styles.content}>
					{/* if(category() === "1"){<ListStaff />}else if(category() === "2")
					<ListStaff />
					else if(category() === "3"){<ListAthletes />}
					else{<ListInfo data={info} />} */}
				</View>
			</CategoriesBackground>
		</View>
	);
};
