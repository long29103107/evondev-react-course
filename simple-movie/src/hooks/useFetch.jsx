import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }, [url]);
    return { data, error, isLoading };
};

export default useFetch;