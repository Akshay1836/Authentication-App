"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function signin() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, SetUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(user);
  const HandleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("user email: " + user.email);
      const response = await axios.post("/api/users/signin", user);
      console.log(response.data);
      console.log("data is :" +response.data);
      if (response.data.success) {
        router.push("/login");
        console.log("User created");
        toast.success("User created");
      } else {
        toast.error(response.data);
        console.log("Error: " + response.data.error);
      }
    } catch (error) {
      // toast.error("An error occurred");
      toast.error("Error: " + error);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex items-center justify-center h-screen  bg-gray-200">
    <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-6 mx-2"></div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md h-screen">
         
          <h2 className="text-center text-2xl font-bold leading-tight text-indigo-600">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{" "}
            <Link
              href={"/login"}
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
             Log In
            </Link>
          </p>
          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-indigo-600">
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full text-black rounded-md border border-gray-300  px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={user.name}
                    onChange={(e) =>
                      SetUser({ ...user, username: e.target.value })
                    }
                    placeholder="Full Name"
                    id="name"
                  />
                </div>
              </div>
              <div>
                <label className="text-base font-medium text-indigo-600">
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    value={user.email}
                    onChange={(e) =>
                      SetUser({ ...user, email: e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300  px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-indigo-600">
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={user.password}
                    onChange={(e) =>
                      SetUser({ ...user, password: e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border text-black border-gray-300  px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={HandleSubmit}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {buttonDisabled ? "Processing" : "Sign Up"}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            {/* <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button> */}
            <Link
              href="/login"
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Visit Login
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="Top-center"/>
  </div>
  </div>
  );
}

export default signin;
