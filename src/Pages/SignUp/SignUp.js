import React from "react";
import logo from "../../Assets/signup/logo.png";
import crystal from "../../Assets/signup/crystal_signup.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SingUp.css";
const SignUp = () => {
   return (
      <div className="w-full">
         <div className="w-[380px] h-[800px]  mx-auto bg-accent">
            <div className="w-[380px] h-[800px] signUpBg">
               <div className="flex items-center justify-center flex-col  ">
                  <div className="w-[127px] h-14 relative mt-[88px]">
                     <img
                        src={logo}
                        alt="dSolveLogo"
                        className="w-[127px] h-10 "
                     />
                     <small className="absolute bottom-[-2px] right-0  text-xs uppercase font-extrabold  text-secondary  ">
                        Design? Solved
                     </small>
                  </div>
               </div>
               <div>
                  <AiOutlineArrowLeft></AiOutlineArrowLeft>
                  <h3>SignUp</h3>
               </div>
               <div>
                  <p>create an account with the new phone number</p>
               </div>
               <div className="w-full">
                  <form className="w-full">
                     <div>
                        <input
                           type="text"
                           placeholder="9560349875"
                           id="mobile_number"
                        />
                        <label htmlFor="mobile_number" name="phone" required>
                           10 Digit Mobile Number
                        </label>
                     </div>
                     <div>
                        <input
                           type="text"
                           placeholder="sanchit1117@gmail.com"
                           id="email"
                           required
                           name="email"
                        />
                        <label htmlFor="email">Email Address</label>
                     </div>
                     <div>
                        <input
                           type="text"
                           placeholder="Sanchit Bhat"
                           required
                           id="name"
                           name="name"
                        />
                        <label htmlFor="name">name</label>
                     </div>
                     <div>
                        <input type="submit" value="sign up" />
                        <p>
                           By clicking, I accept the{" "}
                           <Link to="terms">terms and condition</Link> &{" "}
                           <Link to="privacy_policy">Privacy policy</Link>
                        </p>
                     </div>
                  </form>
               </div>
               <div>
                  <img src={crystal} alt="crystal_signup" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
