import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container mx-auto px-4 py-6 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-4">Oops! Page not found.</p>
            <Link to="/" className="bg-red-600 text-white px-4 py-2 rounded">Go to Home</Link>
        </div>
    );
};

export default NotFoundPage