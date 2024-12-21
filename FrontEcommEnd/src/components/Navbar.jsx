import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="bg-black p-2">
        <p className="text-center text-white m-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to={"/shop"} className="text-white">Shop Now</Link></p>
      </div>
    </>
  );
}
export default Navbar;
