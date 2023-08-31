import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions,  ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWith } = Dimensions.get('window')

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { setMainColors, setPrevMainColors } = useContext( GradientContext )

  const getPosterColors = async (index: number) => {

    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );

    setMainColors({ primary, secondary })
  }

  useEffect(() => {
    if( nowPlaying.length > 0 ){
      getPosterColors(0)
    }
  }, [ nowPlaying ])
  

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
    <GradientBackground>
      <ScrollView>
        <View style={{ top: 50 }}>
          {/* Carrousel Principal */}
          <View style={{ height: 440 }}>
            <Carousel
              data={ nowPlaying }
              renderItem={ ({ item }: any) => <MoviePoster movie={ item }/>}
              sliderWidth={ windowWith }
              itemWidth={ 300 }
              inactiveSlideOpacity={ 0.9 }
              onSnapToItem={ index => getPosterColors( index ) }
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
    </GradientBackground>
    
    
  )
}
