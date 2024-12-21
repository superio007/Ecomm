import { Link } from "react-router-dom";
import { FaHeart ,FaShoppingCart ,FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="bg-black p-2">
        <p className="text-center text-white m-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to={"/shop"} className="text-white">Shop Now</Link></p>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-5 p-4" style={{ borderBottom: "1px solid black" }}>
        <span className="container d-flex justify-content-between">
          <div>
            <Link to={"/"} className="text-decoration-none text-black"><h4 className="fw-bold">Exclusive</h4></Link>
          </div>
          <div className="d-flex justify-content-evenly gap-5">
            <Link className=" nav-color link-underline link-underline-opacity-0" to={"/"}>Home</Link>
            <Link className=" nav-color link-underline link-underline-opacity-0" to={"/about"}>About</Link>
            <Link className=" nav-color link-underline link-underline-opacity-0" to={"/contact"}>Contact Us</Link>
            <Link className=" nav-color link-underline link-underline-opacity-0" to={"/signup"}>Sign Up</Link>
          </div>
          <div className="d-flex gap-3">
          <FaHeart />
          <FaShoppingCart />
          <FaUser />
          </div>
        </span>
      </div>
    </>
  );
}
export default Navbar;
