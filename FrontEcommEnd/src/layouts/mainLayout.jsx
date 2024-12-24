import React from "react";
import { Outlet , useLocation ,Link} from "react-router-dom";
import Navbar from  "../components/Navbar"
import Footer from "../components/Footer"
function mainLayout() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      {location.pathname === "/" ? "" : <div className="container text-capitalize text-black" style={{fontSize:"1.2rem" , padding:"1rem 0"}}>
         <Link className="link-underline link-underline-opacity-0 text-black" to={'/'}>Home </Link>{location.pathname}
      </div>}
      <Outlet />
      <Footer />    
    </div>
  );
}
export default mainLayout;
