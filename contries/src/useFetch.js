import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [countries, setCountries] = useState(null);
  const [loading, setLaoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLaoding(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
        setLaoding(false);
      });
  }, [url]);

  return { countries, error, loading };
};

export default useFetch;
