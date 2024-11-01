import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Loader = () => (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-b-4"></div>
    </div>
  );
  

const SingleMoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const apiKey = "d6ea1860c329732ddd2c8343179ada9b"; // Use your actual API key here

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const [movieResponse, creditsResponse] = await Promise.all([
                    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                        params: { api_key: apiKey, language: 'en-US' },
                    }),
                    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                        params: { api_key: apiKey },
                    }),
                ]);

                const movieData = { ...movieResponse.data, credits: creditsResponse.data };
                setMovie(movieData);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <Loader />; // Replace loading text with loader

    const director = movie.credits.crew.find(person => person.job === 'Director');

    return (
        <div className="bg-gray-900 dark:bg-gray-800 min-h-screen">
            <div
                className="relative w-full h-96 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50 dark:bg-gray-900"></div>
                <div className="relative container mx-auto px-4 py-10">
                    <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
                    <p className="text-lg text-gray-300 mt-2">Release Date: {movie.release_date}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-400">⭐ {movie.vote_average}</span>
                        <span className="text-gray-300 ml-2">({movie.vote_count} votes)</span>
                    </div>
                    <p className="text-gray-300 mt-2">Runtime: {movie.runtime} minutes</p>
                    <p className="text-gray-300 mt-2">
                        Genres: {movie.genres.map(genre => genre.name).join(', ')}
                    </p>
                    <p className="text-gray-300 mt-2">Budget: ${movie.budget.toLocaleString() || 'N/A'}</p>
                    <p className="text-gray-300 mt-2">Revenue: ${movie.revenue.toLocaleString() || 'N/A'}</p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-xl text-white mb-2">Overview:</h2>
                <p className="text-gray-300">{movie.overview || 'No overview available.'}</p>
            </div>
            
            {/* Cast Section */}
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-xl text-white mb-2">Cast:</h2>
                {movie.credits ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {movie.credits.cast.slice(0, 10).map(actor => (
                            <div key={actor.id} className="text-center bg-gray-800 dark:bg-gray-700 rounded-lg p-4 transition-transform transform hover:scale-105">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                                    alt={actor.name} 
                                    className="rounded-full w-24 h-24 mx-auto mb-2" 
                                />
                                <p className="text-sm font-semibold text-white">{actor.name}</p>
                                <p className="text-xs text-gray-400">{actor.character}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-300">No cast information available.</p>
                )}
            </div>

            {/* Director Section */}
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-xl text-white mb-2">Director:</h2>
                {director ? (
                    <div className="flex items-center">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${director.profile_path}`} 
                            alt={director.name} 
                            className="rounded-full w-24 h-24 mr-4" 
                        />
                        <div>
                            <p className="text-lg text-gray-300">{director.name}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-300">No director information available.</p>
                )}
            </div>

            {/* Production Companies Section */}
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-xl text-white mb-2">Production Companies:</h2>
                {movie.production_companies.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-300">
                        {movie.production_companies.map(company => (
                            <li key={company.id}>{company.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-300">No production companies available.</p>
                )}
            </div>
        </div>
    );
};

export default SingleMoviePage;
