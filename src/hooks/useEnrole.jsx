import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useEnrole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: enroled = [] } = useQuery({
    queryKey: ["enroles", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const response = await axiosSecure(`/enroles?email=${user.email}`);
      return response.data;
    },
  });
  return [enroled, refetch];
};
export default useEnrole;
