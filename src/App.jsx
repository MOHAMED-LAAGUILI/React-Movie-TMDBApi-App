import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeProvider'; // Adjust path
import { Header } from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SingleMoviePage from './Pages/SingleMoviePage';
import MoviesPage from './Pages/Movies';
import SeriesPage from './Pages/Series';
import SearchResultsPage from './Pages/SearchResultPage';
import DeveloperCreditsPage from './Pages/DevCredits';
import TrendingPage from './Pages/Trending'; // Import your new page
import PricingPage from './Pages/Pricing'; // Import your new page
import ContactPage from './Pages/Contact'; // Import your new page
import TermsOfServicePage from './Pages/Terms'; // Import your new page
import NotFoundPage from './Pages/404'; // Import your new page

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<SingleMoviePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/series" element={<SeriesPage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/credits" element={<DeveloperCreditsPage />} />
              <Route path="/trending" element={<TrendingPage />} /> {/* Trending Page */}
              <Route path="/pricing" element={<PricingPage />} /> {/* Pricing Page */}
              <Route path="/contact" element={<ContactPage />} /> {/* Contact Page */}
              <Route path="/tos" element={<TermsOfServicePage />} /> {/* Terms of Service Page */}
              <Route path="*" element={<NotFoundPage />} /> {/* 404 Page */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
