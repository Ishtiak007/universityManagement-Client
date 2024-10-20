import React from "react";
import Banner from "../Banner/Banner";
import Photos from "../../Photos/Photos";
import Testimonial from "../Testimonial/Testimonial";
import Faculties from "../Faculties/Faculties";
import RecentEvents from "../RecentEvents/RecentEvents";
import Mark from "../Mark/Mark";
import Campus from "../Campus/Campus";
import Notice from "../Notice/Notice";
import Offer from "../Offer/Offer";
import Scholarship from "../Scholarship/Scholarship";
import NavbarAfter from "../NavbarAfter/NavbarAfter";
import Extracaricular from "../Extracaricular/Extracaricular";
import Zego from "../Zego/Zego";

const Home = () => {
  return (
    <div>
      <NavbarAfter></NavbarAfter>
      <Banner></Banner>
      <Scholarship></Scholarship>
      <Campus></Campus>
      <Faculties></Faculties>
      <Zego></Zego>
      <Offer></Offer>
      <Notice></Notice>
      <RecentEvents></RecentEvents>
      <Mark></Mark>
      <Testimonial></Testimonial>
      <Extracaricular></Extracaricular>
      <Photos></Photos>
      
    </div>
  );
};

export default Home;
