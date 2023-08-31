import React from 'react'
import { ActivityIndicator, Dimensions,  ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWith } = Dimensions.get('window')

export const HomeScreen = () => {

  const { 
    nowPlaying, 
    popular,
    topRated,
    upcoming,
    isLoading } = useMovies();

  if ( isLoading ) {
    return (
      <View style={{ 
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
      }}>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    )
  }
  return (
    <ScrollView>
      <View>
        {/* Carrousel Principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlaying }
            renderItem={ ({ item }: any) => <MoviePoster movie={ item }/>}
            sliderWidth={ windowWith }
            itemWidth={ 300 }
          />
        </View>

        {/* Peliculas Populares */}
        <HorizontalSlider
          title='Popular'
          movies= { popular }
        />

        {/* Peliculas Top Rated */}
        <HorizontalSlider
          title='Top Rated'
          movies= { topRated }
        />
        
        {/* Peliculas Upcoming */}
        <HorizontalSlider
          title='Upcoming'
          movies= { upcoming }
        />
      </View>
    </ScrollView>
    
  )
}
