import { useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import "./style.css";
import Country from "./Country";
import useFetch from "./useFetch";
import { useState } from "react";
import {
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";

function App() {
  const { countries, loading, error } = useFetch(
    "https://restcountries.com/v2/all"
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function handleMode() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
      <div className="App">
        <Header theme={theme} handleMode={handleMode} />
        <main className="main-container w-full pb-44">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  countries={countries}
                  loading={loading}
                  error={error}
                  theme={theme}
                />
              }
            />
            <Route path="/country/:code" element={<Country theme={theme} />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
