import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Zego = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  const { user } = useAuth();

  const handleLoginClick = (e) => {
    if (user) {
      // If the user is already logged in, show a toast message
      toast.success("You are already logged in!");
      e.preventDefault(); // Prevent navigation to the login page
    } else {
      // If the user is not logged in, navigate to the login page
      navigate("/login");
    }
  };


  return (
    <div>
      <SectionTitle
        className="font-serif"
        heading={"Video Conference"}
      // subHeading={"National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore opportunities, collaborate and give guidance to the students"}
      ></SectionTitle>
      <div class="flex">
        {/* <!-- Left Div (40%) --> */}
        <div class="w-2/5 bg-gray-200 p-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your name"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <button
            class="btn mt-2 bg-blue-500 text-white hover:text-black rounded"
            onClick={submitHandler}
          >
            Join
          </button>
          <Link
            to="/login"
            className="btn mt-2 text-gray-700 hover:text-blue-950 rounded ml-5"
            onClick={handleLoginClick}
          >
            Login
          </Link>
        </div>

        {/* <!-- Right Div (60%) --> */}
        <div class="w-3/5 bg-gray-100 p-4">
          <p>This technology bridges geographical gaps, enabling real-time interactions that enhance the learning experience. It allows for virtual lectures, meetings, and group discussions, accommodating diverse learning styles and schedules. By facilitating remote access to educational resources and support services, video conferencing promotes inclusivity and engagement, ensuring that all members of the Rangpur Engineering College community can participate fully, regardless of their physical location. Furthermore, Rangpur Engineering College provides a flexible learning environment that supports a variety of educational needs, which is crucial in an era where online and hybrid education models are increasingly prevalent.</p>
        </div>
      </div>
    </div>
  );
};

export default Zego;
