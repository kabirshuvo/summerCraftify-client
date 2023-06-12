import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTitle from "../../hooks/useTitle";


const UserHome = () => {
  useTitle('UserHome || summerCraftify');

    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    return (
        <div className="py-16 w-full">
<SectionTitle title='This is The home page' heading='home sweet home'></SectionTitle>
        </div>
    );
};

export default UserHome;