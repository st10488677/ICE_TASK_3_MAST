import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgeScreen from "./Screens/AgeScreen";
import MovieScreen from "./Screens/MovieScreen.tsx";

export type RootStackParamList = {
  Age: undefined;
  Movie: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Age">
        <Stack.Screen name="Age" component={AgeScreen} options={{ title: "Age Validator" }} />
        <Stack.Screen name="Movie" component={MovieScreen} options={{ title: "Choose a Movie" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}