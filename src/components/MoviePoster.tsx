import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movies.interface';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie);
  console.log(movie.poster_path);

  return (
    <View style={styles.container}>
        <View style={ styles.imageContainer}>
            <Image source={{uri}} style={styles.image} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    flex:1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,

    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
