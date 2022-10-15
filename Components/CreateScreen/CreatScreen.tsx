import React, { useEffect } from "react";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import useBearStore from "../GlobalState/useBearStore";
import { useForm } from "react-hook-form";
import { Navigation, Product } from "../Interfaces/Interfaces";
import tw from "twrnc";
import Input from "./Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useApi from "../Api/useApi";

const CreatScreen = ({ navigation }: { navigation: Navigation }) => {
  // fetch the Categories from the Api and store it in the global state
  const fetchApi = useApi((state) => state.fetch);
  const hasError = useApi((state) => state.hasError);
  const setCategoriesArr = useBearStore((state) => state.setCategoriesArr);

  useEffect(() => {
    fetchApi("GET", "categories", {}, setCategoriesArr);
  }, []);

  // creat a new array and store the categories array in it
  const categoriesArr: string[] = useBearStore(
    (state) => state.categoriesArr
  ).map((item) => item.name);

  // get the products' Array from the global store
  const setProductsArr = useBearStore((state) => state.setProductsArr);
  const productsArr = useBearStore((state) => state.productsArr);

  // useForm from React Hook Form
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
    defaultValues: {
      avatar: "",
      category: "",
      description: "",
      developerEmail: "inciler88@gmail.com",
      name: "",
      price: 0,
    },
  });

  // this function will be work when the form submitted successfully
  const onSubmit = (data: Product) => {
    navigation.navigate("HomeScreen");
    fetchApi("POST", "products", data, () => {});
    // if there is no error with Api then push the data in the products array in global state
    if(!hasError) {
      setProductsArr([...productsArr,data]);
    }
  };

  return (
    <View style={tw.style("mt-20 p-4 flex-1")}>
      <View style={tw.style("mb-3")}>
        <Text style={tw.style("text-gray-500 mb-2")}>Product title</Text>
        <Input name={"name"} placeholder={"Product title"} control={control} />
        <Text style={tw.style("text-red-600")}>{errors.name?.message}</Text>
      </View>
      <View style={tw.style("mb-3")}>
        <Text style={tw.style("text-gray-500 mb-2")}>Price</Text>
        <Input name={"price"} placeholder={"Price"} control={control} />
        <Text style={tw.style("text-red-600")}>{errors.price?.message}</Text>
      </View>
      <View style={tw.style("mb-3")}>
        <Text style={tw.style("text-gray-500 mb-2")}>Description</Text>
        <Input
          name={"description"}
          placeholder={"Description"}
          control={control}
        />
        <Text style={tw.style("text-red-600")}>
          {errors.description?.message}
        </Text>
      </View>
      <View style={tw.style("mb-3")}>
        <Text style={tw.style("text-gray-500 mb-2")}>Image Link</Text>
        <Input name={"avatar"} placeholder={"Image Link"} control={control} />
        <Text style={tw.style("text-red-600")}>{errors.avatar?.message}</Text>
      </View>
      <View style={tw.style("mb-3")}>
        <Text style={tw.style("text-gray-500 mb-1")}>
          Selected Category:{" "}
          {watch("category") === "" ? "No Selected" : watch("category")}
        </Text>
        <Text style={tw.style("text-red-600")}>{errors.category?.message}</Text>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoriesArr.map((item, index) => (
            <Pressable key={index} onPress={() => setValue("category", item)}>
              <Text
                style={tw.style(
                  "my-auto mx-3 p-3 rounded-lg font-bold text-center border-[1px]",
                  { "border-0 bg-black text-white": watch("category") === item }
                )}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={tw.style("flex-1 flex justify-end items-center")}>
        <Button
          color={"black"}
          title={"Add Product"}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default CreatScreen;

// schema for checking Yup validation
let schema = yup.object().shape({
  avatar: yup
    .string()
    .url("It's not a valid link")
    .required("Enter the link of product's image please"),
  category: yup.string().required("Select a category please"),
  description: yup.string().required("Write the description of product please"),
  name: yup.string().required("Enter the name of product please"),
  price: yup.number().positive("The product's price should be bigger than 0"),
});
