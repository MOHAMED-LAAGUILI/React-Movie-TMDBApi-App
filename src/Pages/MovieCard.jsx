import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar key={i} className={`text-${i <= rating ? 'yellow-500' : 'gray-400'} animate-pulse`} />
            );
        }
        return stars;
    };

    return (
        <div
            onClick={handleClick}
            className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer group"
        >
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-4">
                <h2 className="font-semibold text-lg text-white">{movie.title}</h2>
                <p className="text-gray-400 truncate">{movie.overview}</p>
                <div className="flex items-center my-2">
                    {renderStars(Math.round(movie.vote_average / 2))} {/* Convert to 5-star scale */}
                </div>
                <p className="text-gray-500">Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
    }).isRequired,
};

export default MovieCard;
