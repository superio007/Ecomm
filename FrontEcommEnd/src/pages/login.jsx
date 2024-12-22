import signupBanner from "../assets/signupBanner.png"
import IconGoogle from "../assets/IconGoogle.png"
import {useForm} from "react-hook-form";
function login() {
    const {register, handleSubmit} = useForm();
    const handler = (data) => {
        console.log(data);
    }
    return (
        <div className="container">
            <div className="row align-items-center" style={{padding: "5rem 0"}}>
                <div className="col-6">
                    <img src={signupBanner} width={"600px"} alt="" />
                </div>
                <div className="col-6">
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                    <div style={{width:"400px"}}>
                        <form onSubmit={handleSubmit(handler)}>
                            <div className="mb-3">
                                <input type="email" {...register("email")} placeholder="Email" className="form-control signinInput" style={{height:"3rem"}} />
                            </div>
                            <div className="mb-3">
                                <input type="password" {...register("password")} placeholder="Password" className="form-control signinInput" style={{height:"3rem"}} />
                            </div>
                            <button type="submit" style={{height:"4rem",backgroundColor:"#db4444",color:"white",fontSize:"1.2rem",padding:"0.5rem 2rem"}} className="form-control mb-3">Log In</button>
                            <div style={{height:"4rem",fontSize:"1.2rem",padding:"0.8rem 2rem"}} className="d-flex gap-2 mt-3 justify-content-center border rounded align-items-center">
                                <img src={IconGoogle} alt="" />
                                <p className="m-0">Sign up with Google</p>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <p style={{color: "#db4444"}}>Forget Password?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;