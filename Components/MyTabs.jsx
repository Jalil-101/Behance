import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Glamhub2 from "../Screens/Glamhub2";
import Glamhub3 from "../Screens/Glamhub3";
import Glamhub1 from "../Screens/Glamhub1";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Glamhub2}
      />
      <Tab.Screen name="ui" component={Glamhub3} />
      <Tab.Screen name="u8" component={Glamhub2} />
    </Tab.Navigator>
  );
}

export default MyTabs;
