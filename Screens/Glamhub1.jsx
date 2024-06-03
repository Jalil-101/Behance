import { View, Text, Image , TouchableOpacity} from "react-native";
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

const Glamhub1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDlZoxd8745h_rpi7KuCW432x_Adldqtqzg&s",
          }}
          height={900}
          width={390}
        />
        <View className="absolute top-80 left-0 right-0 bottom-0 text-center">
          <Text className=" text-white text-6xl text-center ">GlamHub</Text>
          <Text className=" text-white text-4xl text-center pt-14">
            TREND IN
          </Text>
          <Text className=" text-white text-4xl text-center">YOUR UNIQUE</Text>
          <Text className=" text-red-500 text-4xl text-center">STYLE</Text>

          <Text className=" text-white text-xl text-center">
            Remember, that the most important aspect of fashion is feeling
            confident and comfortable in what you wear.Happy shopping!
          </Text>
          <View className="absolute top-80 left-60 right-0 bottom-0 pt-1">
            <MaterialCommunityIcons
              name="emoticon-happy"
              size={24}
              color="orange"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Proshow")}>
            <View className="pl-12">
              <View className="border-3 h-16 w-72 rounded-lg  bg-red-700 ">
                <Text className="text-2xl font-bold text-white pt-4 text-center">
                  Explore Collections
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View className="flex-row space-x-2 pl-16">
            <Text className=" text-white text-lg text-center">
              Already have an account?
            </Text>
            <Text className=" text-red-500 text-xl text-center">Login</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Glamhub1;