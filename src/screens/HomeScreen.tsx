import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();

  if ( isLoading ) {
    return (
      <View style={{ 
        flex: 1,
        alignContent: 'center'
        ,justifyContent: 'center'
      }}>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    )
  }


  return (
    <View>
      <MoviePoster
        movie={peliculasEnCine[4]}
      />
   </View>
  )
}
