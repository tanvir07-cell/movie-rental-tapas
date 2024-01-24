import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { }

})

const ThemeControlloer = ({ children }) => {
    const [theme, setTheme] = useState("dark")


    // when i first open the browser, i see that there is no theme in localstorage, so i set the theme to light.
    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "dark");
        }
    }, []);

    useEffect(() => {
        // select html elem
        //add or remove class dark in html elem according to theme in localstorage.

        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");

            setTheme("light");
        }
    }, [theme]);

    // handle switch theme
    const toggleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    const value = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );

}

export const useTheme = () => useContext(ThemeContext);
export default ThemeControlloer