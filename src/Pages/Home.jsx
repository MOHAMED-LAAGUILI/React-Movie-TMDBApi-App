import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCard from './MovieCard';
import { GiFlame } from 'react-icons/gi';

const Loader = () => (
    <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-gray-700"></div>
    </div>
);

const fetchMovies = async () => {
    const apiKey = "d6ea1860c329732ddd2c8343179ada9b";
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
            api_key: apiKey,
            language: 'en-US',
            page: 1,
        },
    });
    return response.data.results;
};

const fetchMovieDetails = async (id) => {
    const apiKey = "d6ea1860c329732ddd2c8343179ada9b";
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
            api_key: apiKey,
            language: 'en-US',
        },
    });
    return response.data;
};

const fetchSeries = async () => {
    const apiKey = "d6ea1860c329732ddd2c8343179ada9b";
    const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
            api_key: apiKey,
            language: 'en-US',
            page: 1,
        },
    });
    return response.data.results;
};

const Home = () => {
    const { data: movies, error: movieError, isLoading: movieLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
        retry: 1,
    });

    const { data: series, error: seriesError, isLoading: seriesLoading } = useQuery({
        queryKey: ['series'],
        queryFn: fetchSeries,
        retry: 1,
    });

    const { data: movieDetails, error: detailsError, isLoading: detailsLoading } = useQuery({
        queryKey: ['movieDetails', movies?.[0]?.id],
        queryFn: () => fetchMovieDetails(movies[0].id),
        enabled: !!movies && movies.length > 0,
        retry: 1,
    });

    if (movieLoading || seriesLoading || detailsLoading) {
        return <Loader />;
    }

    if (movieError || seriesError || detailsError) {
        return (
            <div className="text-center p-4 text-red-500">
                Error fetching data: {movieError?.message || seriesError?.message || detailsError?.message}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
                        <h1 className=" flex text-center text-5xl font-bold mt-5 mb-5 text-red-800"> <GiFlame />Now Streaming</h1>

         {movies.length > 0 && movieDetails && (
    <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[0].backdrop_path})`,
            backgroundColor: 'gray', // Fallback color
        }}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-white">{movieDetails.title}</h1>
            <p className="text-lg text-gray-300 mt-2">Release Date: {movieDetails.release_date}</p>
            <div className="flex items-center mt-2">
                <span className="text-yellow-400">⭐ {movieDetails.vote_average}</span>
                <span className="text-gray-300 ml-2">({movieDetails.vote_count} votes)</span>
            </div>
            <p className="text-gray-300 mt-2">Runtime: {movieDetails.runtime} minutes</p>
            <p className="text-gray-300 mt-2">
                Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}
            </p>
            <p className="text-gray-300 mt-2">Budget: ${movieDetails.budget.toLocaleString() || 'N/A'}</p>
            <p className="text-gray-300 mt-2">Revenue: ${movieDetails.revenue.toLocaleString() || 'N/A'}</p>
        </div>

        {/* Play Icon with Animation */}
        <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative">
                <div className="play-icon animate-pulse">
                    <div className="play-button"></div>
                </div>
            </div>
        </div>
    </div>
)}


            <h1 className="text-center text-5xl font-bold my-10">Popular Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <h1 className="text-center text-5xl font-bold mt-5 mb-5">Popular Series</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {series.map((show) => (
                    <MovieCard key={show.id} movie={show} />
                ))}
            </div>
        </div>
    );
};

export default Home;
