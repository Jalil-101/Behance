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

const Glamhub2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pl-2">
          <View className=" p-6  flex-row ">
            <View className="space-x-4 flex-row">
              <Foundation name="list" size={34} color="black" />
              <Text className="font-bold text-2xl ">GlamHub</Text>
            </View>
            <View className="pl-24 flex-row space-x-6">
              <MaterialCommunityIcons
                name="bell-badge-outline"
                size={34}
                color="black"
              />
              <Entypo name="magnifying-glass" size={32} color="black" />
            </View>
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="">
            <View className="flex-row">
              <View className="pl-4">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7eDpZpxj0mZ5gNI9R5WJtiIlvDaWbpbWp7nQPwoeen3oIaCog1AhIASwcb8B_wWXEzE&usqp=CAU",
                  }}
                  height={170}
                  width={350}
                  borderRadius={23}
                />
              </View>
              <View className="pl-4">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7eDpZpxj0mZ5gNI9R5WJtiIlvDaWbpbWp7nQPwoeen3oIaCog1AhIASwcb8B_wWXEzE&usqp=CAU",
                  }}
                  height={170}
                  width={350}
                  borderRadius={25}
                />
              </View>
              <View className="pl-4">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7eDpZpxj0mZ5gNI9R5WJtiIlvDaWbpbWp7nQPwoeen3oIaCog1AhIASwcb8B_wWXEzE&usqp=CAU",
                  }}
                  height={170}
                  width={350}
                  borderRadius={25}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="pt-4">
            <View className="flex-row space-x-3">
              <View className="items-center">
                <Image
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  height={85}
                  width={90}
                  borderRadius={15}
                />
                <Text className="text-lg font-semibold">Kurtis</Text>
              </View>
              <View className="items-center">
                <Image
                  source={{
                    uri: "https://cdn-images.farfetch-contents.com/14/27/54/87/14275487_20959819_1000.jpg",
                  }}
                  height={85}
                  width={90}
                  borderRadius={15}
                />
                <Text className="text-lg font-semibold">Pants</Text>
              </View>
              <View className="items-center">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAfqE8DxuhC87dcLjp2gUob1_5y-5Qz9JKQ&s",
                  }}
                  height={85}
                  width={90}
                  borderRadius={15}
                />
                <Text className="text-lg font-semibold">T-Shirts</Text>
              </View>
              <View className="items-center">
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_1-KqdfWbRfKqyUDmjtuiwr2S_nInk7CDQ&s",
                  }}
                  height={85}
                  width={90}
                  borderRadius={15}
                />
                <Text className="text-lg font-semibold">Sweaters</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="p-4 flex-row">
          <Text className="font-extrabold text-xl">Top Products</Text>
          <View className="pl-48">
            <Entypo name="dots-three-horizontal" size={28} color="black" />
          </View>
        </View>

        <View className="flex-row">
          <View className="pl-2">
            <View className="  border-4 border-gray-200 w-44 rounded-lg">
              <Image
                className="object-cover object-center "
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzf6RiDZWzTuxfoapwCwSPwRjhGmo4B2nxg&s",
                }}
                height={200}
                width={168}
                borderRadius={5}
              />
              <Text className="text-lg font-semibold">Women Kurtis H&M</Text>
              <Text className="text-lg font-semibold">Branded</Text>
              <View className="pt-2 flex-row">
                <View className=" flex-row pt-1">
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="gray" />
                </View>

                <View className=" flex-row space-x-1 pl-7">
                  <View className="pt-1">
                    <Foundation name="dollar" size={20} color="red" />
                  </View>
                  <Text className="text-lg font-semibold text-gray-400">
                    250
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="pl-2">
            <View className="  border-4 border-gray-200 w-44 rounded-lg">
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADRkWnBD0Eie6PSLKxQLcGEQUbN1cMIEmTw&s",
                }}
                height={200}
                width={168}
                borderRadius={5}
              />
              <Text className="text-lg font-semibold">
                Regular Fit hoodie T-
              </Text>
              <Text className="text-lg font-semibold">Shirt for Women</Text>
              <View className="pt-2 flex-row">
                <View className=" flex-row pt-1">
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="orange" />
                  <AntDesign name="star" size={18} color="gray" />
                </View>

                <View className=" flex-row space-x-1 pl-7">
                  <View className="pt-1">
                    <Foundation name="dollar" size={20} color="red" />
                  </View>
                  <Text className="text-lg font-semibold text-gray-400">
                    540
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="p-4">
          <View className="flex-row space-x-16">
            <View className="bg-red-700 w-12 h-12 rounded-full ">
              <View className="pt-2">
                <View className="items-center">
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <MaterialIcons name="home" size={28} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="">
              <MaterialCommunityIcons name="bell" size={32} color="gray" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Prodeet")}>
              <View className="">
                <Fontisto name="bookmark-alt" size={32} color="gray" />
              </View>
            </TouchableOpacity>
            <View className="">
              <FontAwesome5 name="user-alt" size={28} color="gray" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Glamhub2;
