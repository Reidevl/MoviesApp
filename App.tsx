import 'react-native-gesture-handler';

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const Stack = createStackNavigator();

const AppState = ({ children }: any) =>{

  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
        {/* <FadeScreen/> */}
      </AppState>
    </NavigationContainer>
    
  )
}
