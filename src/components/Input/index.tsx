import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons"

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
};

export const Input = ({ icon, value, ...rest }: InputProps) => {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return (
    <View style={[styles.container, { borderBottomColor: isFocused ? "#DC1637" : theme.colors.primary100 }]}>
      <View>
        <Feather
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? '#DC1637' :  theme.colors.primary100}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.primary100}
        inlineImageLeft="search_icon"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </View>
  );
};
