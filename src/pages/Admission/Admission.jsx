import React from "react";
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
const Admission = () => {
  return (
    <div className="pt-10">
      <div className="mx-auto md:w-8/12 my-8 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        <h3 className="text-4xl uppercase border-y-2 pt-4 font-bold font-serif text-sky-600">
          ADDMISSION REQUIREMENTS
        </h3>
      </div>
      <div>
        <p className="flex text-xl">
          {/* <GoDot className="scale-125"/> */}
          🔘Passed in 2017 or subsequent year in SSC/Equivalent (With Physics,
          Chemistry &Math) and Passed in 2020 or subsequent year in
          HSC/Equivalent / Diploma in Engineering.
        </p>
        <p className="flex text-xl">
          {/* <GoDot className="scale-125"/> */}
          🔘Minimum Marks in both exams must be GPA 3.25 and total GPA 7.5.
        </p>
        <p className="flex text-xl">
          {/* <GoDot className="scale-125"/> */}
          🔘Incase of Diploma in engineering the scale of 4.00 to be multiplied
          by 1.25, the scale is to be 5.00
        </p>
      </div>
      <div class="w-full h-1 bg-black rounded  my-8"></div>
      {/* ---------------------------2nd part---------------------------- */}
      <div className="flex py-6">
        <div className="w-1/2">
          <h3 className="text-3xl text-center py-4 text-sky-600">Required Documents</h3>
          <div className="">
            <p>●Required Documents</p>
            <p>●Completed application form and fees</p>
            <p>●School and college leaving Certificate/ Testimonial</p>
            <p>
              ●SSC/Equivalent & HSC/Equivalent true copy of Academic transcripts
            </p>
            <p>●Recent 4 copy Passport size photographs</p>
            <p>●Certified true copy of name change certificate (if any)</p>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl text-center py-4 text-sky-600">Process</h3>
          <div className="">
            <p>●Students are supposed to submit completely filled out application form. The application form can be downloaded and printed out and sent by e-mail, apply online , postal or at our Campus.</p>
            <p>●Please send TK. 660.00 for application form fee to 01855979496 through bKash . Then use your transaction ID at the time of filling up Application form</p>
            <p>●The Office of Admissions will be reviewing and checking all the documents and proceed</p>
            <p>
              ●When your application is accepted, a letter of acceptance will be issued <span className="font-bold text-sky-600"><Link>Online Application Click Here</Link></span>
            </p>
             
          </div>
        </div>
      </div>
      {/* ---------------------------2nd part end---------------------------- */}
      <div class="w-full h-1 bg-black rounded  my-8"></div>
      <div className="flex py-12">
        <div className="w-4/6">
          <div className="font-serif text-center">
            <p className="text-3xl text-sky-600">Admission & Routine 2023-24</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Notice</th>
                  <th></th>
                  <th>Published Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>
                    <Link to="">
                      Practical Exam Time Schedule for Theatre Department
                    </Link>
                  </td>
                  <td> </td>
                  <td>2024-03-27</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>
                    <Link to="">
                      Practical Exam Time Schedule for Music Department
                    </Link>
                  </td>
                  <td></td>
                  <td>2024-03-27</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>
                    <Link to="">
                      Practical and Written Exam Notice For Fine Arts, Music,
                      Theatre And English
                    </Link>
                  </td>
                  <td></td>
                  <td>2024-03-27</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>
                    <Link to="">
                      Selected Candidates for English Written Examination
                    </Link>
                  </td>
                  <td></td>
                  <td>2024-03-13</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>
                    <Link to="">Notice For Admission Result</Link>
                  </td>
                  <td></td>
                  <td>2024-03-13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-2/6">
          <div className="card w-96 bg-base-100  ">
            <div className="card-body">
              <h2 className="card-title text-center">
                Undergraduate Application 2023-24
              </h2>
              <div class="flex items-center justify-center ">
                <Link to="">
                  {" "}
                  <button className="py-2 w-[280px] h-8 px-6 mb-4 mt-2 bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g>
                        <path
                          d="M244.5 662l268.1-446.4 268 446.4z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                          fill="#F7F9F9"
                        ></path>
                        <path
                          d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                          fill="#040E1B"
                        ></path>
                      </g>
                    </svg>
                    <span className="duration-500">
                      Online Application & Result
                    </span>
                  </button>
                </Link>
              </div>
              <div className="card-actions justify-end">
                <p className=" text-center ">Final Application Guideline</p>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100  ">
            <div className="card-body">
              <div class="w-full h-1 bg-black rounded mt-2 mb-4"></div>
              <h2 className="card-title text-center">
                Affiliated Colleges Admission 2023-24
              </h2>
              <div class="flex items-center justify-center ">
                <Link to="">
                  {" "}
                  <button className="py-2 w-[280px] h-8 px-6  mt-2 bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g>
                        <path
                          d="M244.5 662l268.1-446.4 268 446.4z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                          fill="#F7F9F9"
                        ></path>
                        <path
                          d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                          fill="#040E1B"
                        ></path>
                      </g>
                    </svg>
                    <span className="duration-500 ">Admission Notice</span>
                  </button>
                </Link>
              </div>
              <div className="card-actions justify-center">
                <Link to="">
                  {" "}
                  <button className="py-2 w-[280px] h-8 px-6 mb-4  bg-sky-600 rounded hover:bg-slate-950 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g>
                        <path
                          d="M244.5 662l268.1-446.4 268 446.4z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                          fill="#F7F9F9"
                        ></path>
                        <path
                          d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                          fill="#040E1B"
                        ></path>
                        <path
                          d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                          fill="#03090b"
                        ></path>
                        <path
                          d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                          fill="#040E1B"
                        ></path>
                      </g>
                    </svg>
                    <span className="duration-500">Online Application</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
