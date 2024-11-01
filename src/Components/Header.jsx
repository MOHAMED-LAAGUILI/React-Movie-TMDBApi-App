import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from "../assets/images/CMovies-Logo.png";
import { ThemeContext } from '../Components/ThemeProvider'; // Adjust the path as needed
import Modal from "./AuthModal"; 
import AuthPage from '../Pages/AuthPage';

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search?query=${encodeURIComponent(search)}`);
        }
    };
    return (
        <div className={`bg-${theme === 'dark' ? 'black' : 'white'} transition duration-400`}>
            <nav className="shadow-md w-full">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">
                        <img src={Logo} width="120" alt="CMovies-Logo" />
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-grow max-w-md">
            <form className="flex items-center w-full" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search Movies"
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 rounded-l-full border transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-200  dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
                />
                <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-r-full transition duration-300 flex items-center"
                >
                    <FaSearch />
                </button>
            </form>
        </div>

                    {/* User and Menu Icons */}
                    <div className="flex items-center space-x-4">
                        <button  onClick={() => setIsModalOpen(true)} className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md transition duration-300">
                            <FaUser className="text-2xl" />
                        </button>
                        <button onClick={toggleTheme} className={"text-3xl"}>
                    {theme === 'dark' ? '🌛' : '🌞'}
                </button>
                        <button
                            className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-black'} transition duration-300`} 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex md:hidden justify-center bg-white px-4 py-2"
                    >
                        <form className="flex items-center w-full" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search Movies"
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-yellow-400 transition duration-300"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-r-full transition duration-300 flex items-center"
                            >
                                <FaSearch />
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* Secondary Navigation Links */}
                <div className={`hidden md:flex font-bold justify-center items-center space-x-4 bg-gradient-to-r from-yellow-600 to-yellow-500 p-3`}>
                    {[
                   { to: "/", label: "Home" },
                   { to: "/movies", label: "Movies" },
                   { to: "/series", label: "Series" },
                   { to: "/trending", label: "Trending" }, // Trending page
                   { to: "/pricing", label: "Pricing" },   // Pricing page
                   { to: "/contact", label: "Contact" },    // Contact page
                   { to: "/tos", label: "Terms of Service" }, // Terms of Service page
                   { to: "/credits", label: "Dev Credits" },
                    ].map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="text-white flex items-center shadow-2xl hover:bg-black hover:bg-opacity-20 transition duration-300 rounded-full px-3 py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation Links */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gradient-to-r from-yellow-600 to-yellow-500 p-3"
                    >
                        {[
                            { to: "/", label: "Home" },
                            { to: "/movies", label: "Movies" },
                            { to: "/series", label: "Series" },
                            { to: "/trending", label: "Trending" },
                            { to: "/pricing", label: "Pricing" },
                            { to: "/contact", label: "Contact" },
                        ].map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-white block text-center hover:bg-black hover:bg-opacity-20 transition duration-300 rounded-full px-3 py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}

<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <AuthPage/>
</Modal>
            </nav>
        </div>
    );
};
