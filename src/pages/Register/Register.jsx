import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoUrl: data.photoUrl,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User added to the database')
                                    reset()
                                    toast.success('User created successfully')
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <Helmet>
                <title>University Management || Register</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-[110vh]">
                <div className="flex flex-col w-[450px] p-3 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className='mt-6 mb-2 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to REC 2.0</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 ng-untouched ng-pristine ng-valid">
                        <div className='space-y-1'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0284C7] bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0' />
                                {errors.name && <span className='text-red-500'>This Name field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="photoUrl" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0284C7] bg-gray-200 text-gray-900' />
                                {errors.photoUrl && <span className='text-red-500'>photoUrl field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0284C7] bg-gray-200 text-gray-900' />
                                {errors.email && <span className='text-red-500'>This Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 16,
                                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                                    })} name="password" placeholder="password" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0284C7] bg-gray-200 text-gray-900' />
                                {errors.password && <span className='text-red-500'>This Password field is required</span>}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-400'>Password must me 6 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-400'>Password must be A small letter, a capitel letter and a special character</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className='bg-[#0284C7] w-full rounded-md py-3 text-white cursor-pointer mt-4' type="submit" value="Submit" />
                            </div>
                            <div>
                                <p className='px-6 text-sm text-center text-gray-400'>
                                    Already have an account?{' '}
                                    <Link
                                        to='/login'
                                        className='hover:underline hover:text-[#0284C7] text-gray-600'
                                    >
                                        Login
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>

                    </form>
                    <div className='flex justify-center items-center'>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Register;