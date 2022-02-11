import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { CategoriesBackground } from "../../components/CategoriesBackground";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesGroup } from "../../utils/categoriesGroup";

import { styles } from "./styles";

type Props = {
	title: string;
};

export const AcessGroup = ({ title }: Props) => {

	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
		<View style={styles.container}>
			<CategoriesBackground
			>
				<Header title={title} />
				<CategorySelect
					data={categoriesGroup}
					categorySelected={category}
					setCategory={handleCategorySelect}
				/>
				<View style={styles.content}></View>
			</CategoriesBackground>
		</View>
	);
};
