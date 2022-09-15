import React, { useState } from "react";
import { View } from "react-native";

import { CategoriesBackground } from "../../components/CategoriesBackground";
import { CategorySelect } from "../../components/CategorySelect";
import { categoriesAccounting } from "../../utils/categoriesAccounting";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
	title: string;
};

export const AccountGroup = ({ title }: Props) => {
	const [category, setCategory] = useState("");


	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}


	return (
		<CategoriesBackground>
			<CategorySelect
				data={categoriesAccounting}
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>
			<View style={styles.content}></View>
		</CategoriesBackground>
	);
};
