import {useEffect, useState} from 'react';
import {MovieFull} from '../interfaces/movieDetail.interface';
import movieDB from '../api/movieDB';
import {Cast, CreditResponse} from '../interfaces/movieCredits.interface';

interface MovieDetail {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditResponse>(`/${movieId}/credits`);

    const [ movieDetailsResp, castResp ] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast
    })
  };


  return {
    ...state
  };
};
