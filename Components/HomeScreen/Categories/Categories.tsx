import React, { useEffect } from "react";
import { Text, ScrollView, Pressable } from "react-native";
import tw from "twrnc";
import useBearStore from "../../GlobalState/useBearStore";
import useApi from "../../Api/useApi";

const Categories = () => {
  // fetch the Categories from the Api and store it in the global state
  const fetchApi = useApi((state) => state.fetch);
  const setCategoriesArr = useBearStore((state) => state.setCategoriesArr);

  useEffect(() => {
    fetchApi("GET", "categories", {}, setCategoriesArr);
  }, []);

  // Get the categories' Array from the global state and add the name "All" to it
  const categoriesArr = [
    { name: "All" },
    ...useBearStore((state) => state.categoriesArr),
  ];

  // Get the selected categories from Global State
  const selectedCategory = useBearStore((state) => state.selectedCategory);

  // function to store the selected Category in Global Store
  const setSelectedCategory = useBearStore((state) => state.setSelectedCategory);

  return (
    <ScrollView
      style={tw.style("flex-1 bg-[#f1f1f1]")}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categoriesArr.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => {
            setSelectedCategory(item.name);
          }}
        >
          <Text
            style={tw.style(
              "my-auto mx-3 bg-black p-3 rounded-md font-bold text-white text-center",
              { "border-2 bg-white text-black": item.name === selectedCategory }
            )}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Categories;
