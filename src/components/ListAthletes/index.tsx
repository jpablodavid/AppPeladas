import React from "react";
import { FlatList, View } from "react-native";
import { Athletes } from "../Athletes";

import { styles } from "./styles";

export const ListAthletes = () => {
	const menbers = [
		{
			id: "1",
			userName: "Pablo Boscarino David",
			number: "01",
		},
		{
			id: "2",
			userName: "Pablo",
			number: "09",
		},
		{
		id: "3",
		userName: "Pablo",
		number: "08",
		},
		{
		id: "4",
		userName: "Pablo",
		number: "19",
		},
		{
		id: "5",
		userName: "Pablo",
		number: "09",
		},
		{
		id: "6",
		userName: "Pablo",
		number: "10",
		},
	];

	return (
		<FlatList 
			showsVerticalScrollIndicator={false}
			style={styles.container}
			data={menbers}
			keyExtractor={item => item.id}
			renderItem={({item}) => (
				<Athletes data={item}/>
			)}
		/>
	);
};
