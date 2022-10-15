import React from "react";
import { View, Text, Image } from "react-native";
import { Product } from "../Interfaces/Interfaces";
import useBearStore from "../GlobalState/useBearStore";
import tw from "twrnc";

const DetailPage = () => {
  // Get the selected product from the Global state
  const {avatar, name, price, category, description}: Product = useBearStore((state) => state.selectedProduct);

  return (
    <View style={tw.style("flex-1 mt-10 bg-white rounded-md shadow")}>
      <View style={tw.style("flex-3 pt-2")}>
        <Image
          style={tw.style("w-3/4 h-3/4 mx-auto")}
          source={{ uri: avatar }}
        />
      </View>
      <View style={tw.style("flex-1 bg-black rounded-md p-3")}>
        <View style={tw.style("flex flex-row justify-between mb-2")}>
          <Text style={tw.style("text-white font-bold text-lg")}>
            {name}
          </Text>
          <Text style={tw.style("text-white font-bold text-lg")}>
            ${price}
          </Text>
        </View>
        <View style={tw.style("flex flex-row mb-2")}>
          <Text style={tw.style("text-white font-bold mr-1")}>Category:</Text>
          <Text style={tw.style("text-white")}>{category}</Text>
        </View>
        <View style={tw.style("flex flex-row mb-2")}>
          <Text style={tw.style("text-white font-bold mr-1")}>
            Description:
          </Text>
          <Text style={tw.style("text-white w-72")}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailPage;
