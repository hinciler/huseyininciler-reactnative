import React from 'react';
import {Text, View} from "react-native";
import tw from "twrnc";

const Header = () => {
    return (
        <View style={tw.style("flex-1")}>
            <Text style={tw.style("mx-5 my-auto text-lg font-bold italic")}>Upayments Store</Text>
        </View>
    );
};

export default Header;

