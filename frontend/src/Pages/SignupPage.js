import React from "react";
import { Form } from 'react-bootstrap'
import { useContext } from "react";
import Context from "../Context/Context";
import Spinner from "../components/Spinner";

export default function SignupPage() {
  let { Signup ,loading} = useContext(Context);
  const HandleSignup = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="">
      {loading?(
        <Spinner/>
      ):(
        <div className="lg:grid grid-cols-2  ">
        <div className="text-start   text-black my-6 mx-3 border-2 h-fit rounded-xl">
          
        <h3 className="text-center bg-cyan-500 text-white rounded-t-xl">Instruction</h3>
          <ul className="">
            <li><h6 className="py-2">None Of the Fields Should be Empty</h6></li>
            <li><h6 className="py-2">Username,Password,First Name,Last Name Should Contain Atleast 5 Characters</h6></li>
            <li><h6 className="py-2">Email Should Be Valid</h6></li>
            <li><h6 className="py-2">Password Should Be A Mix Of Alphabets And Numbers</h6></li>
            
          </ul>
         
        </div>
        <div className="mx-3 my-6 border-2 rounded-xl">
          <div className="flex justify-center text-center bg-lime-500 text-white rounded-t-xl mb-3">
          <h3 className=" ">Signup</h3>
          </div>
          <form action="" onSubmit={Signup} className="mx-3">
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Username"
                name="username"
                className="focus:ring-[7px] focus:ring-black focus:ring-opacity-50 focus:border-2 focus:border-black"
              />
              <label htmlFor="floatingInputCustom">Username</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="First Name"
                name="first_name"
                className="focus:ring-[7px] focus:ring-black focus:ring-opacity-50 focus:border-2 focus:border-black"
              />
              <label htmlFor="floatingInputCustom">First Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Last Name"
                name="last_name"
                className="focus:ring-[7px] focus:ring-black focus:ring-opacity-50 focus:border-2 focus:border-black"
              />
              <label htmlFor="floatingInputCustom">Last Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Last Name"
                name="email"
                className="focus:ring-[7px] focus:ring-black focus:ring-opacity-50 focus:border-2 focus:border-black"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                name="password"
                className="focus:ring-[7px] focus:ring-black focus:ring-opacity-50 focus:border-2 focus:border-black"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Form.Floating className="my-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                className="focus:ring-[7px] focus:ring-black focus:ring-opacity-50 focus:border-2 focus:border-black"
              />
              <label htmlFor="floatingPasswordCustom">Confirm Password</label>
            </Form.Floating>
            <div className="flex justify-center">
            <button type="submit" className="bg-black text-white p-2 rounded-md focus:ring-[7px] focus:ring-black focus:ring-opcaity-50 focus:ring-opacity-50 focus:transition-all focus:fade-in-out text-2xl my-3">SignUp</button>
            </div>
          </form>
          
        </div>

      </div>
      )}
      
    </div>
  );
}

