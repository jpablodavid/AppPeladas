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

type Props = {
	title: string;
};

const info = {
	id: "1",
	name: "Amendoeira",
	dayWeek: "Sexta-Feira",
	time: "08",
	valorMensal: "50",
	valorConvidado: "20",
	local: "Rua: ivinheima, 368 - bento ribeiro campo do sapê",
};

export const AcessGroup = ({ title }: Props) => {

	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
		<View style={styles.container}>
			<Header menu={false} title={title} />
			<CategoriesBackground>
				<View style={{height: 16}}></View> 
				<CategorySelect
					data={categoriesGroup}
					categorySelected={category}
					setCategory={handleCategorySelect}
				/>
				<View style={styles.content}>
					{/* <ListStaff/> */}
					{/* <ListAthletes/> */}
					<ListInfo data={info} />
				</View>
			</CategoriesBackground>
		</View>
	);
};
