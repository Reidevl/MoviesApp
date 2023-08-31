import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movies.interface';

export type RootStackParams = {
  Home: undefined;
  DetailScreen: Movie
}


const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            // headerShown: false,
        }}
    >
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" options={{ headerShown: false }} component={ DetailScreen } />
    </Stack.Navigator>
  );
}