import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "./MovieCard";

const Loader = () => (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-b-4"></div>
    </div>
  );
  
const fetchSearchResults = async (query) => {
  const apiKey = "d6ea1860c329732ddd2c8343179ada9b";
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/multi",
    {
      params: { api_key: apiKey, language: "en-US", query },
    }
  );
  return response.data;
};

const SearchResultsPage = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  const { data, error, isLoading } = useQuery({
    queryKey: ["searchResults", query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query, // Only run the query if query exists
  });

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="text-center p-4 text-red-500">
        Error fetching search results: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Search Results for {query}</h1>
      {data.results.length === 0 ? (
        <p className="text-gray-300">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.results.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
