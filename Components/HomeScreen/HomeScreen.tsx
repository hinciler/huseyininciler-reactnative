import React from "react";
import { View, Text, Pressable } from "react-native";
import Header from "./Header/Header";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import tw from "twrnc";
import {Navigation} from "../Interfaces/Interfaces";

const HomeScreen = ({navigation}:{navigation:Navigation}) => {
  return (
    <View style={tw.style("flex-1 mt-9")}>
      <Header />
      <Categories />
      <Products navigation={navigation} />
      <Pressable
        style={tw.style(
          "w-12 h-12 flex justify-center items-center absolute bottom-3 right-4 border-2 bg-white rounded-full"
        )}
        onPress={() => navigation.navigate("CreatScreen")}
      >
        <Text style={tw.style("text-5xl")}>+</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
