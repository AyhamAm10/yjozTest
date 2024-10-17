import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import bg from "../assets/login/Mask group.png";
import logo from "../assets/login/Group 3.png";
import persone from "../assets/login/material-symbols_person.svg";
import google from "../assets/login/flat-color-icons_google.png";
import emoji from "../assets/login/fluent-emoji-flat_waving-hand-light (1).png";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/app-ico-footer 1.png";
import { AxiosResponse } from "axios";
import { axiosClaint, endPoints } from "../api/API__information_conect";
import { bodyReqVerify } from "../redux/slice/verifyCode";
import { useDispatch } from "react-redux";

const Register: React.FC = () => {
  const [state, setState] = useState({
    email: "",
    normal:"true", 
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      setState((priv)=>{return{...priv , email: values.email}});
    },
  });

  useEffect(() => {
    if (state.email) {
      const submitData = async () => {
        try {
          const res: AxiosResponse<any, any> = await axiosClaint.post(
            endPoints.post.login,
            state
          );
          if (res) {
            dispatch(bodyReqVerify(state));
            navigate("/verification");
          }
        } catch (error) {
          console.log(error);
        }
      };
      submitData();
    }
  }, [state, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-primery">
      <div className="shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        {/* Left Side (Image Section) */}
        <div className="rounded-r-xl md:bg-gradient-to-r from-red to-yalwe px-4 py-6 md:p-6 lg:p-8 relative flex flex-col items-center justify-center">
          <img
            src={bg}
            alt="Circular Logo"
            className="sm:mb-4 z-10 w-[200px] md:w-[30rem] lg:w-[35rem] xl:w-[42rem]"
          />
          <img
            src={logo}
            alt="yjoz logo"
            className="hidden md:block md:h-[100px] h-[140px] absolute left-[50px] top-[50px] z-20"
          />
          <p className="text-white text-lg mt-4 z-10 hidden md:block">
            © YJOZ General Trading LLC - 2024
          </p>
        </div>

        {/* Right Side (Form Section) */}
        <div className="sm:px-3 md:px-5 lg:px-8 flex items-center sm:justify-center flex-col">
          <div className="w-full sm:w-auto px-4">
            <div className="w-full flex-center gap-4 sm:mb-8">
              <h2 className="h-fit text-2xl lg:text-4xl xl:text-5xl font-medium text-center text-dark">
                Hello there
              </h2>
              <img src={emoji} alt="hand emoji" className="h-fit" />
            </div>
            <p className="mb-8 text-center text-[#A9A8A8] text-sm md:text-xl xl:text-2xl">
              Please enter your email to create an account
            </p>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-8 relative">
                <img
                  src={persone}
                  alt="person icon"
                  className="absolute top-1/2 translate-y-[-60%] left-3"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email"
                  className={`w-full text-sm sm:text-lg px-10 py-4 border placeholder:text-[#A9A8A8] ${
                    formik.touched.email && formik.errors.email
                      ? "border-red"
                      : "border-primery"
                  } rounded-lg bg-white`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red text-sm">{formik.errors.email}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full bg-yalwe text-white p-3 rounded-lg"
              >
                Sign Up
              </button>

              <div className="mt-8 flex items-center justify-between">
                <hr className="w-full border-t border-[#A9A8A8]" />
                <span className="px-3 text-[#A9A8A8] text-xs w-full">
                  OR Continue With
                </span>
                <hr className="w-full border-t border-[#A9A8A8]" />
              </div>

              <div className="flex-center w-full">
                <button type="button" className="mt-8 w-fit">
                  <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                </button>
              </div>

              <p className="mt-4 text-center text-[#A9A8A8]">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-yalwe">Log in</span>
                </Link>
              </p>
            </form>
            <div className="flex-center">
              <img
                src={logo2}
                alt="yjoz logo"
                className="md:hidden my-5 md:h-[100px] h-[140px] z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
