import TwoFemales from "../assets/twoFemales.png";
import sellers from "../assets/sellers.png";
import monthlySales from "../assets/monthlySales.png";
import customerActiove from "../assets/customerActive.png";
import annualSales from "../assets/annualSales.png";
import fastdelivery from "../assets/fastdelivery.png";
import customerSupport from "../assets/customerSupport.png";
import moneyback from "../assets/moneyback.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import {FaTwitter,FaLinkedinIn, FaInstagram } from "react-icons/fa";
function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="fw-bold">Our Story</h1>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping
                <br /> makterplace with an active presense in Bangladesh.
                Supported
                <br /> by wide range of tailored marketing, data and service
                solutions,
                <br /> Exclusive has 10,500 sallers and 300 brands and serves 3
                <br /> millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                <br /> a very fast. Exclusive offers a diverse assotment in
                categories
                <br /> ranging from consumer.
              </p>
            </div>
          </div>
          <div className="col-6">
            <img src={TwoFemales} alt="" />
          </div>
        </div>
        <div className="row" style={{margin: "6rem 0"}}>
          <div className="col-2 highlight offset-1 text-center border rounded pt-3">
            <img style={{ width: "4rem" }} src={sellers} alt="" />
            <div>
              <h2>10.5k</h2>
              <p>Sallers active our site</p>
            </div>
          </div>
          <div className="col-2 highlight offset-1 text-center border rounded pt-3">
            <img style={{ width: "4rem" }} src={monthlySales} alt="" />
            <div>
              <h2>33k</h2>
              <p>Mopnthly Produduct Sale</p>
            </div>
          </div>
          <div className="col-2 highlight offset-1 text-center border rounded pt-3">
            <img style={{ width: "4rem" }} src={customerActiove} alt="" />
            <div>
              <h2>45.5k</h2>
              <p>Customer active in our site</p>
            </div>
          </div>
          <div className="col-2 highlight offset-1 text-center border rounded pt-3">
            <img style={{ width: "4rem" }} src={annualSales} alt="" />
            <div>
              <h2>25k</h2>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-4">
                <img src={person1} alt="" />
                <h2 className="mt-2">Tom Cruise</h2>
                <p>Founder & Chairman</p>
                <div className="d-flex gap-3">
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
            <div className="col-4">
                <img src={person2} alt="" />
                <h2 className="mt-2">Emma Watson</h2>
                <p>Managing Director</p>
                <div className="d-flex gap-3">
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
            <div className="col-4">
                <img src={person3} alt="" />
                <h2 className="mt-2">Will Smith</h2>
                <p>Product Designer</p>
                <div className="d-flex gap-3">
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
        </div>
        <div className="row" style={{margin: "6rem 0"}}>
            <div className="col-3 highlight offset-1 text-center rounded pt-3">
                <img style={{width:"4rem"}} src={fastdelivery} alt="" />
                <h2 style={{fontSize:"1.25rem" , marginTop:"1rem"}}>FREE AND FAST DELIVERY</h2>
                <p style={{fontSize:"0.875rem"}}>Free delivery for all orders over $140</p>
            </div>
            <div className="col-3 highlight offset-1 text-center rounded pt-3">
                <img style={{width:"4rem"}} src={customerSupport} alt="" />
                <h2 style={{fontSize:"1.25rem" , marginTop:"1rem"}}>24/7 CUSTOMER SERVICE</h2>
                <p style={{fontSize:"0.875rem"}}>Friendly 24/7 customer support</p>
            </div>
            <div className="col-3 highlight offset-1 text-center rounded pt-3">
                <img style={{width:"4rem"}} src={moneyback} alt="" />
                <h2 style={{fontSize:"1.25rem" , marginTop:"1rem"}}>MONEY BACK GUARANTEE</h2>
                <p style={{fontSize:"0.875rem"}}>We reurn money within 30 days</p>
            </div>
        </div>
      </div>
    </>
  );
}
export default About;
