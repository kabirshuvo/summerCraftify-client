import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useAppionments = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: appionted = [] } = useQuery({
    queryKey: ["appionments", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const response = await axiosSecure(`/appionments?email=${user.email}`);
      return response.data;
    },
  });
  return [appionted, refetch];
};
export default useAppionments;
