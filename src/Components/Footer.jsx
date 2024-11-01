import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/images/CMovies-Logo.png'; // Update the logo path

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img src={Logo} alt="CMovies Logo" className="w-32" />
                    </div>
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="/" className="hover:text-yellow-400 transition duration-300">Home</a>
                        <a href="/movies" className="hover:text-yellow-400 transition duration-300">Movies</a>
                        <a href="/series" className="hover:text-yellow-400 transition duration-300">Series</a>
                        <a href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-xl hover:text-yellow-400 transition duration-300" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-xl hover:text-yellow-400 transition duration-300" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-xl hover:text-yellow-400 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-xl hover:text-yellow-400 transition duration-300" />
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} CMovies. All rights reserved.</p>
                    <p>Powered by TMDB API</p>
                    <p>Dev By MOHAMED LAAGUILI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
