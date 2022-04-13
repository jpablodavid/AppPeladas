import React from "react";
import { ScrollView } from "react-native";
import { List } from "../../screens/JoinGroup";

import { categoriesGroup } from "../../utils/categoriesGroup";

import { ItemListGroup } from "../ItemLIstGroup";

import { styles } from "./styles";

type Props = {
	data: List[];
	categorySelected: string;
	setCategory: (categotyId: string) => void;
  disable: boolean;
};

export const ListGroup = ({
	data,
	categorySelected,
	setCategory,
}: Props) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
      style={styles.container}
		>
			{data.map((item) => (
				<ItemListGroup
					key={item.id}
					title={item.name}
					checked={item.id === categorySelected}
					onPress={() => setCategory(item.id)}
          />
			))}
		</ScrollView>
	);
};
