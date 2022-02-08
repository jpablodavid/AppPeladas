import React from "react";
import { ScrollView } from "react-native";
import { categoriesGroup } from "../../utils/categoriesGroup";
import { Category } from "../Category";

import { styles } from "./styles";

type Props = {
	list?: Object;
	categorySelected: string;
	setCategory: (categotyId: string) => void;
};

export const CategorySelect = ({
	categorySelected,
	setCategory,
}: Props) => {
	return (
		<ScrollView
			horizontal
			style={styles.container}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 40 }}
		>
			{categoriesGroup.map((category) => (
				<Category
					key={category.id}
					title={category.title}
					icon={category.icon}
					checked={category.id === categorySelected}
					onPress={() => setCategory(category.id)}
				/>
			))}
		</ScrollView>
	);
};
