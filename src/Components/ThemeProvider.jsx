import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Check local storage for a saved theme
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'; // Default to 'light' if no value is found
    });

    useEffect(() => {
        // Apply the dark class to the document element
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save the theme to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// PropTypes validation
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Export the ThemeContext and ThemeProvider
export { ThemeProvider, ThemeContext };
