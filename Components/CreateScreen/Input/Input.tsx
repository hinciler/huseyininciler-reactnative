import React from "react";
import { Control } from "react-hook-form/dist/types/form";
import { useController } from "react-hook-form";
import { TextInput } from "react-native";
import tw from "twrnc";

const Input = ({
  name,
  control,
  placeholder,
}: {
  name: string;
  control: Control<any>;
  placeholder: string;
}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={tw.style("border-2 rounded-md px-3 py-1 font-semibold")}
      selectionColor={"black"}
      placeholder={placeholder}
      multiline={name === "description"}
      numberOfLines={name === "description" ? 4 : 1}
    />
  );
};

export default Input;
