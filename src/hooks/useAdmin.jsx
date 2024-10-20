import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useAdmin = () => {
    const { user, loading } = useAuth();
    const axioxPublic = useAxiosPublic();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axioxPublic.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;