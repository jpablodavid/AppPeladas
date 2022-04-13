import React  from "react";
import { Control, Controller, FieldError } from 'react-hook-form'
import { Text } from "react-native-svg";
import { Input, InputProps } from "../Input";

import { styles } from "./styles";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError
}

export const InputControl = ({ error, control, name, ...rest }: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {
        error && <Text>{error.message}</Text>
      }
    </>
  );
};
