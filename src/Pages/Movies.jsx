import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useState } from "react";


const Loader = () => (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-b-4"></div>
    </div>
  );
  

const fetchMovies = async (page) => {
  const apiKey = "d6ea1860c329732ddd2c8343179ada9b";
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: { api_key: apiKey, language: "en-US", page },
    }
  );
  return response.data;
};

const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => fetchMovies(currentPage),
  });

  const handleNextPage = () => {
    if (currentPage < data.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="text-center p-4 text-red-500">
        Error fetching movies: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {data.total_pages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === data.total_pages}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;
