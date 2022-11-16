import React from "react";
import { ScrollView } from "react-native";
import { useAuth } from "../../hooks/auth";

import { categoriesGroup } from "../../utils/categoriesGroup";

import { Category } from "../Category";

import { styles } from "./styles";

type Props = {
	data: typeof categoriesGroup;
	categorySelected: string;
	setCategory: (categotyId: string) => void;
  disable?: boolean;
};

export const CategorySelect = ({
	data,
	categorySelected,
	setCategory,
}: Props) => {

  const { group } = useAuth();

	return (
		<ScrollView
			horizontal
			style={styles.container}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 40 }}
		>
			{data.map((item) => (
				<Category
					key={item.id}
					title={item.title}
					icon={item.icon}
          //se não tiver um grupo criado ou participando de um, ele deixa o button apagado
					checked={group ? item.id === categorySelected : true}
					onPress={() => setCategory(item.id)}
          />
			))}
		</ScrollView>
	);
};
