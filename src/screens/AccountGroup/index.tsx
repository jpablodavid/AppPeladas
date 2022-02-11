import React, { useState } from "react";
import { View } from "react-native";

import { Header } from "../../components/Header";
import { CategoriesBackground } from "../../components/CategoriesBackground";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesAccounting } from "../../utils/categoriesAccounting";

import { styles } from "./styles";

type Props = {
	title: string;
};

export const AccountGroup = ({ title }: Props) => {
	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
		<CategoriesBackground>
			<Header title={title} />
			<CategorySelect
				data={categoriesAccounting}
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>
			<View style={styles.content}></View>
		</CategoriesBackground>
	);
};
