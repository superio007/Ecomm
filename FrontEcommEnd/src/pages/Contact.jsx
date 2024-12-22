import iconsMail from '../assets/icons-mail.png'
import iconsphone from '../assets/icons-phone.png'
import {useForm } from "react-hook-form";

const Contact = () => {
    const {register, handleSubmit} = useForm();

    const handSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className='container'>
            <div className="row" style={{margin: "5rem 0"}}>
                <div className="col-3 bg-white rounded  p-5 box">
                    <div className="d-flex gap-2 align-items-center ">
                        <img src={iconsphone} alt="" />
                        <p className='m-0 fw-bold'>Call To Us</p>
                    </div>
                    <p className='mt-3'>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                    <div className='border-top pt-3'>
                        <div className="d-flex gap-2 align-items-center ">
                            <img src={iconsMail} alt="" />
                            <p className='m-0 fw-bold'>Write To US</p>
                        </div>
                        <p className='mt-3'>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className="col-8 bg-white rounded p-5 box" style={{marginLeft: "2rem"}}>
                    <form onSubmit={handleSubmit(handSubmit)}>
                        <div className='d-flex gap-3'>
                            <input className='input-div' {...register("name")} type="text"  placeholder='Your Name' id="" />
                            <input className='input-div' {...register("email")} type="email"  placeholder='Your Email' id="" />
                            <input className='input-div' {...register("phone")} type="text"  placeholder='Your Phone' id="" />
                        </div>
                        <div className='d-flex flex-column'>
                            <input type="text" className='input-div mt-3' {...register("message")} style={{height: "10rem"}}  placeholder='Your Message' id=""/>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btn mt-3 py-3 px-5' style={{background: "#db4444", color: "white"}}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}

export default Contact
