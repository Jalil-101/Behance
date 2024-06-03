import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Glamhub3 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View className="mr-14"> */}
        <View className="p-4 flex-row justify-center align items-center space-x-16 mt-6 mb-2">
          <TouchableOpacity onPress={() => navigation.navigate("Proshow")}>
            <AntDesign name="left" size={34} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="text-xl font-bold">Product Details </Text>
          </View>
          <MaterialCommunityIcons name="cart-outline" size={34} color="black" />
        </View>
        {/* </View> */}
        <View>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74N1z_ABpHj3Z-55gmIMOvu8U5odKpP_TgA&s",
            }}
            height={350}
            width={400}
          />
        </View>
        <View className="bg-black flex-row">
          <Text className="text-white font-bold text-lg">
            {" "}
            #1 Best Selling on this week{" "}
          </Text>
          <View className="pl-28">
            <AntDesign name="right" size={24} color="white" />
          </View>
        </View>
        <View className="pt-2 pl-2 flex-row space-x-1">
          <FontAwesome6 name="building-circle-check" size={26} color="black" />
          <Text className="text-gray-500">YOK Official Site</Text>
          <MaterialCommunityIcons name="check-decagram" size={22} color="red" />
        </View>
        <View className="pt-3 pl-2">
          <Text className="text-xl font-bold">Womens Kurtis H&M Branded</Text>
        </View>
        <View className=" pt-2 flex-row">
          <AntDesign name="star" size={24} color="orange" />
          <AntDesign name="star" size={24} color="orange" />
          <AntDesign name="star" size={24} color="orange" />
          <AntDesign name="star" size={24} color="orange" />
          <AntDesign name="star" size={24} color="gray" />
        </View>
        <View className="flex-row">
          <Entypo name="dot-single" size={38} color="orange" />
          <View className="mr-7 mt-1">
            <Text className="text-gray-500 text-lg"> Stocks: 14 left</Text>
          </View>
          <View className="pl-32 flex-row pt-1 pb-2">
            <Foundation name="dollar" size={28} color="red" />
            <View className="pl-1">
              <Text className="text-lg font-semibold">250</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="text-xl font-semibold pl-2">Size</Text>
        </View>
        <View className="pl-3  flex-row space-x-4">
          <View className="border-1 h-14 w-12 rounded-lg  bg-gray-400 ">
            <View className="items-center pb-5 pt-3">
              <Text className="text-xl font-bold text-gray-500">S</Text>
            </View>
          </View>
          <View className=" border-5 border-gray-500">
            <View className="border-3 h-14 w-12 rounded-lg  bg-gray-400 border-gray-500">
              <View className="items-center pb-5 pt-3">
                <Text className="text-xl font-bold text-gray-500">M</Text>
              </View>
            </View>
          </View>

          <View className=" border-5 border-red-600">
            <View className="border-3 h-14 w-12 rounded-lg bg-gray-400">
              <View className="items-center pb-5 pt-3 ">
                <Text className="text-xl font-bold text-gray-500">L</Text>
              </View>
            </View>
          </View>
          <View className="border-1 h-14 w-12 rounded-lg  bg-gray-400 ">
            <View className="items-center pb-5 pt-3">
              <Text className="text-xl font-bold text-gray-500">XL</Text>
            </View>
          </View>
          <View className="border-1 h-14 w-12 rounded-lg  bg-gray-400 ">
            <View className="items-center pb-5 pt-3">
              <Text className="text-xl font-bold text-gray-500">XXL</Text>
            </View>
          </View>
        </View>
        <View className="pl-5 pt-7 pb-6">
          <View className="flex-row space-x-4">
            <View className="pt-4">
              <MaterialIcons name="shopping-bag" size={30} color="red" />
            </View>
            <View className="border-3 h-16 w-72 rounded-lg  bg-red-500 ">
              <Text className="text-lg font-bold text-white pl-24 pt-4">
                Shop Now{" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Glamhub3;
