import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import REDetails from "../pages/REDetails/REDetails";
import ProgrammingHero from "../pages/ProgrammingHero/ProgrammingHero";
import CSE from "../pages/CSE/CSE";
import ICE from "../pages/ICE/ICE";
import EEE from "../pages/EEE/EEE";
import CE from "../pages/CE/CE";
import Facilities from "../pages/Facilities/Facilities";
import Departments from "../pages/Departments/Departments";
import Teacher from "../pages/Teacher/Teacher";
import Admission from "../pages/Admission/Admission";
import Campus from "../pages/Campus/Campus";
import Student from "../pages/Student/Student";
import Schedule from "../pages/Schedule/Schedule";
import VideoConferance from "../pages/VideoConferance/VideoConferance";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/cricket",
        element: <REDetails></REDetails>,
      },
      {
        path: "/programming-hero",
        element: <ProgrammingHero></ProgrammingHero>,
      },
      {
        path: "/cse",
        element: <CSE></CSE>,
      },
      {
        path: "/ice",
        element: <ICE></ICE>,
      },
      {
        path: "/eee",
        element: <EEE></EEE>,
      },
      {
        path: "/ce",
        element: <CE></CE>,
      },
      {
        path: "/Facilities",
        element: <Facilities></Facilities>,
      },
      {
        path: "/departments",
        element: <Departments></Departments>,
      },
      {
        path: "/teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/campus",
        element: <Campus></Campus>,
      },
      {
        path: "/student",
        element: <Student></Student>,
      },
      {
        path: "/sched",
        element: <Schedule></Schedule>,
      },
      {
        path: "/room/:id",
        element: <VideoConferance></VideoConferance>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ]
  },
]);