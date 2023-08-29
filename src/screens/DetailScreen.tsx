import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
// import { Movie } from '../interfaces/movies.interface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route }: Props ) => {

  const movie = route.params;

  console.log( movie.original_title );
  
  return (
   <Text>DetailScreen</Text>
  )
}
