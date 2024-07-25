import { useState, useEffect } from 'react';
import { fetchData } from '../services/apiService';

const useFetch = (endpoint: string | null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (endpoint === null) return;

    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
