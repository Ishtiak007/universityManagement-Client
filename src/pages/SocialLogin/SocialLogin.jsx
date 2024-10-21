import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="text-yellow-400"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;