import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Profile = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const [isAdmin] = useAdmin()


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully!');
                navigate('/')
            })
            .catch(() => {
                toast.error("Something wrong. Please Try again")
            })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            {
                isAdmin ?



                    <>
                        <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                            <img
                                alt='profile'
                                referrerPolicy="no-referrer"
                                src='https://lh3.googleusercontent.com/p/AF1QipOWYFrjXzEcA9bKXE4h1FHoULdvgb40zY655vrp=s1360-w1360-h1020'
                                className='w-full mb-4 rounded-t-lg h-44 object-cover'
                            />
                            <div className='flex flex-col items-center justify-center p-4 -mt-16'>


                                <p className='p-2 my-4 px-4 text-xs text-white bg-blue-600 rounded-full uppercase'>
                                    Admin Profile
                                </p>
                                <p className='mt-2 text-xl font-medium text-gray-800 '>
                                    User Id: {user?.uid}
                                </p>
                                <div className='w-full p-2 mt-4 rounded-lg'>
                                    <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                        <p className='flex flex-col'>
                                            Name
                                            <span className='font-bold text-black '>
                                                {user?.displayName}
                                            </span>
                                        </p>
                                        <p className='flex flex-col'>
                                            Email
                                            <span className='font-bold text-black '>{user?.email}</span>
                                        </p>

                                        <div className='my-4'>
                                            <button className='bg-[#E5E7EB] w-full rounded-md py-3 text-black'>
                                                Add Video Conference Link
                                            </button>
                                            <button onClick={handleLogOut} className='bg-[#0284C7] w-full rounded-md py-3 text-white mt-3'>
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>





                    :

                    <>
                        <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                            <img
                                alt='profile'
                                referrerPolicy="no-referrer"
                                src='https://lh3.googleusercontent.com/p/AF1QipOWYFrjXzEcA9bKXE4h1FHoULdvgb40zY655vrp=s1360-w1360-h1020'
                                className='w-full mb-4 rounded-t-lg h-44 object-cover'
                            />
                            <div className='flex flex-col items-center justify-center p-4 -mt-16'>


                                <p className='p-2 my-4 px-4 text-xs text-white bg-blue-600 rounded-full uppercase'>
                                    User Profile
                                </p>
                                <p className='mt-2 text-xl font-medium text-gray-800 '>
                                    User Id: {user?.uid}
                                </p>
                                <div className='w-full p-2 mt-4 rounded-lg'>
                                    <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                        <p className='flex flex-col'>
                                            Name
                                            <span className='font-bold text-black '>
                                                {user?.displayName}
                                            </span>
                                        </p>
                                        <p className='flex flex-col'>
                                            Email
                                            <span className='font-bold text-black '>{user?.email}</span>
                                        </p>

                                        <div className='my-4'>
                                            <button className='bg-[#0284C7] w-full rounded-md py-3 text-white'>
                                                Update Profile
                                            </button>
                                            <button onClick={handleLogOut} className='bg-[#0284C7] w-full rounded-md py-3 text-white mt-3'>
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Profile;