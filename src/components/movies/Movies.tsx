import { useEffect,useState } from "react";
import { MovieList } from "./MovieList";
import { getMovies } from "../../services/movies.services";
import type {Movie} from "../../model/movie.model";




export default function Movies() {
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
    console.log(movies);
  return (
    <div>
      <MovieList movies = {movies}/>
    </div>
  );
}