import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { Movie } from '../interfaces/movies.interface';
import Icon from 'react-native-vector-icons/Ionicons'

import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route, navigation }: Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetails( movie.id );
  
  console.log({movieFull});
  

  return (
    <ScrollView>
      <View style={ styles.imageContainer}>
        <View style= { styles.imageBorder }>
          <Image
          source={{ uri }}
          style={ styles.posterImage }
          />
        </View>
        
      </View>

      <View style={ styles.marginContainer }>
        <Text style= { styles.subtitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>

        {
          isLoading 
              ? <ActivityIndicator size={30} color={'blue'} style= {{ marginTop:20 }}/>
              : <MovieDetails movieFull={ movieFull! } cast={ cast }/>
        }

        {/* Boton para cerrar */}
        <View style= { styles.backButton }>
          <TouchableOpacity
            onPress={() => navigation.goBack() }
          >
            <Icon
              name='close-circle-outline'
              color={'white'}
              size={ 50 }

              />
            </TouchableOpacity>
          </View>
        
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer:{
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,

    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage:{
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle:{
    fontSize: 16,
    opacity: 0.6
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton:{
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 40,
    right: 15
  }
});