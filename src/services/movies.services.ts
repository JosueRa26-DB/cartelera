import type {Movie} from "../model/movie.model"

const MOVIES_URL = "../../Data/Movies.json";

export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(MOVIES_URL);

    if (!response.ok) {
        throw new Error(
            `No se pudo cargar movies.json (status ${response.status})`,
        );

        }

        const data = await response.json();
        console.log("Pelicula cargada:" ,data);
        return data as Movie[];
        
    }
    
    export async function getMovieById(id:string): Promise<Movie | null>{
        const movies = await getMovies();
        const found = movies.find((movie) => String(movie.id) === String(id));
        return found ?? null;
    }    
