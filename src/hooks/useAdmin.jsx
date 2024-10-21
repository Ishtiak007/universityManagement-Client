import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
    const { user, loading } = useAuth();
    const axioxSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axioxSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    });
    console.log(isAdmin)
    return [isAdmin, isAdminLoading];
};

export default useAdmin;