import HomeScreen from "./Components/HomeScreen/HomeScreen";
import DetailPage from "./Components/DetailPage/DetailPage";
import CreatScreen from "./Components/CreateScreen/CreatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // creat Stack for React Navigation Toolkit
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="CreatScreen" component={CreatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
