import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useEnrole = () => {
  const { user } = useAuth();

  const { refetch, data: enroled = [] } = useQuery({
    queryKey: ["enroles", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/enroles?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [enroled, refetch];
};

export default useEnrole;
