// import React from "react";

// const Navbar = () => {
//   const navOptions = (
//     <>

//       <li>
//         <a>Admissions</a>
//       </li>
//       <li>
//         <a>Parent</a>
//         <ul className="p-2">
//           <li>
//             <a>Submenu 1</a>
//           </li>
//           <li>
//             <a>Submenu 2</a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <a>Item 3</a>
//       </li>
//     </>
//   );
//   return (
//     <div>
//       <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-black bg-black">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             ></ul>
//           </div>
//           <a className="btn btn-ghost text-xl">REC2.0</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <a>Item 1</a>
//             </li>
//             <li>
//               <details>
//                 <summary>Parent</summary>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//             <li>
//               <a>Item 3</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
// import "./Navbar.css";
import log from "../../../assets/123.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const { user } = useAuth()
  return (
    <div>
      <div className="navbar fixed z-10  max-w-screen-xl text-sky-600 bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Academics</a>
              </li>
              <Link to="/admission">
                <li>
                  <a>Admissions</a>
                </li>
              </Link>
              <li>
                <a>Campus</a>
              </li>
              <li>
                <a>Authority</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex">
              <img className="w-12" src={log} alt="" />
              <a className="btn btn-ghost text-xl">REC2.0</a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Academics</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/cse">
                      <a>CSE</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/eee">
                      <a>EEE</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ice">
                      <a>ICE</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ce">
                      <a>CE</a>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <a>Other</a>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/admission">
                <a>Admission</a>
              </Link>
            </li>
            <Link to="/campus">
              <li>
                <a>Campus</a>
              </li>
            </Link>
            <li>
              <details>
                <summary>Authority</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <Link to={user ? "/profile" : "/login"}>
              <li>
                <a>Profile</a>
              </li>
            </Link>
            {/* <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/sched">
            <a className="btn">Help Desk</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
