import { useEffect, useState } from "react";

const useClases = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch("http://localhost:5000/summerclasses")
        .then((res) => res.json())
        .then((data) => {
            setClasses(data);
            setLoading(false)
        });
    }, []);




    return [classes, loading];
};

export default useClases;