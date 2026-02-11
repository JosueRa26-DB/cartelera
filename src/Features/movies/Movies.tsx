import { useEffect,useState } from "react";
import { MovieList } from "./MovieList";
import { getMovies } from "../../services/movies.services";
import type {Movie} from "../../model/movie.model";




export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then(setMovies).finally(() => setLoading(false));
  },[]);

  if (loading) 
    return(
     <div>
     cargando....
     </div>
    );
    
  return (
    <div>
      <MovieList movies = {movies}/>
    </div>
  );
}
import { useEffect,useState } from "react";
import { MovieList } from "./MovieList";
import { getMovies } from "../../services/movies.services";
import type {Movie} from "../../model/movie.model";




export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then(setMovies).finally(() => setLoading(false));
  },[]);

  if (loading) 
    return(
     <div>
     cargando....
     </div>
    );
    
  return (
    <div>
      <MovieList movies = {movies}/>
    </div>
  );
}