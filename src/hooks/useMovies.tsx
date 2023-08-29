import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieDbNowPlaying, Movie } from '../interfaces/movies.interface';

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    
    const [ peliculasEnCine, setpeliculasEnCine]  = useState<Movie[]>([]);

    const getMovies = async () => {
    
        const resp = await movieDB.get<MovieDbNowPlaying>('/now_playing');
        const peliculas = resp.data.results;
        
        setpeliculasEnCine( peliculas );

        setisLoading(false);
    }

    useEffect(() => {
        // now_playing
        getMovies();
    }, [])


      return {
        peliculasEnCine,
        isLoading
      }

}
