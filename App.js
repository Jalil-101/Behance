import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Glamhub1 from "./Screens/Glamhub1";
import Glamhub2 from "./Screens/Glamhub2";
import Glamhub3 from "./Screens/Glamhub3";
import MyTabs from "./Components/MyTabs";




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Glamhub1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Proshow"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Prodeet"
          component={Glamhub3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
