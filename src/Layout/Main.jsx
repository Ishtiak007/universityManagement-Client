import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import ChatBot from '../pages/Shared/ChatBot/ChatBot';
import LiveClock from '../pages/LiveClock/LiveClock';

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter= location.pathname.includes('cricket') || location.pathname.includes('programming-hero')|| location.pathname.includes('cse')|| location.pathname.includes('ice')|| location.pathname.includes('eee')|| location.pathname.includes('ce');
    return (
        <div>
            <Navbar></Navbar>
            {/* <ChatBot></ChatBot> */}
            <Outlet></Outlet>
            <LiveClock></LiveClock>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;