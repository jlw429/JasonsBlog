import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    //re-renders the DOM every time at every render. especially to fetch data

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error('Sorry, could not fetch data');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted.');
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });

    //clean up function for unmounting error links-
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
