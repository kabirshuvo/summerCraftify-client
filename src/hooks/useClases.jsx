import { useQuery } from "@tanstack/react-query";

const useClases = () => {
   
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['summerclasses'],
        queryFn: async() => {
            const res = await fetch('https://summer-craftify-server.vercel.app/summerclasses');
            return res.json();
        }
    })




    return [classes, loading, refetch];
};

export default useClases;