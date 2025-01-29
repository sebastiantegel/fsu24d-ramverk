import { useState, useEffect } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const data: T = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!data) getData();
  });

  return { data, loading };
  // { data: data, loading: loading }
  // { data: undefined, loading: false }
};
