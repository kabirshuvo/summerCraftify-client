import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useSellectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: sellectedclasses = [] } = useQuery({
    queryKey: ["sellectedclasses", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const response = await axiosSecure(`/sellectedclasses?email=${user.email}`);
      return response.data;
    },
  });
  return [sellectedclasses, refetch];
};
export default useSellectedClasses;
