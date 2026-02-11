import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";
import { NotFound } from "./shared/notFound";
import { Home } from "./components/home/Home";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/movieDetails";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
