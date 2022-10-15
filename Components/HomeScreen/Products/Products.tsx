import React, { useEffect } from "react";
import { View, ScrollView, Text, Pressable, Image } from "react-native";
import tw from "twrnc";
import useBearStore from "../../GlobalState/useBearStore";
import { Navigation } from "../../Interfaces/Interfaces";
import useApi from "../../Api/useApi";

const Products = ({ navigation }: { navigation: Navigation }) => {
  // fetch the products from the Api and store it in the global state
  const fetchApi = useApi((state) => state.fetch);
  const setProductsArr = useBearStore((state) => state.setProductsArr);

  useEffect(() => {
    fetchApi("GET", "products", {}, setProductsArr);
  }, []);

  // Get the product's Array from the global state
  const productsArr = useBearStore((state) => state.productsArr);

  // Get the selected category from Global State
  const selectedCategory: string = useBearStore((state) => state.selectedCategory);

  // function to get the product information when the user clicked the product and store it in global state
  const setSelectedProduct = useBearStore((state) => state.setSelectedProduct);

  return (
    <ScrollView
      style={tw.style("flex-8 bg-[#f1f1f1]")}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw.style("w-full flex flex-row flex-wrap justify-center")}>
        {productsArr.map(
          (item, index) =>
            (item.category === selectedCategory || selectedCategory === "All") && (
              <Pressable
                key={index}
                style={tw.style("w-[45%] h-72 m-2")}
                onPress={() => {
                  setSelectedProduct(item);
                  navigation.navigate("DetailPage");
                }}
              >
                <View style={tw.style("flex-1 bg-white rounded-md shadow")}>
                  <View style={tw.style("flex-3 pt-2")}>
                    <Image
                      style={tw.style("w-3/4 h-3/4 mx-auto")}
                      source={{ uri: item.avatar }}
                    />
                  </View>
                  <View
                    style={tw.style(
                      "flex-1 bg-black rounded-md p-1 justify-between"
                    )}
                  >
                    <Text style={tw.style("text-white font-bold")}>
                      {item.name}
                    </Text>
                    <Text style={tw.style("text-white font-bold")}>
                      ${item.price}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )
        )}
      </View>
    </ScrollView>
  );
};

export default Products;
