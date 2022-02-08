import React, { useState } from "react";
import { View, Text } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./styles";


export const Group = () => {
	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
		<View style={styles.container}>
			<CategorySelect
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>
		</View>
	);
};
