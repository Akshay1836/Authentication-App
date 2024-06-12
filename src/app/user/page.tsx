"use client";
import axios from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function page() {
  const [user,setUser]:any=useState("");
  const [show,setShow]=useState(false)
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
      console.log("logout sesction");
    } catch (error) {
      console.log(error);
    }
  };
  const getData=async()=>{
    const responses=await axios.get("/api/users/me");
    console.log(responses);
    console.log(responses.data.user.username)
    setUser(responses.data.user.username)
    
    
  }
  useEffect(()=>{
   getData();
  },[])

  return (
    <section className="mb-2 border  p-4 rounded-lg max-w-full bg-neutral-100 flex justify-center items-center h-screen">
      <div className="mx-auto">
        <div className="card md:flex max-w-lg bg-neutral-300 p-10 rounded-md">
          <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
            <img
              className="object-cover rounded-full"
              src="https://tailwindflex.com/public/images/user.png"
            />
          </div>
          <div className="flex-grow text-center md:text-left text-gray-800">
            {/* <p className="font-bold">{user.email}</p> */}
            <h3 className="text-xl heading ">{show ? user:"Nothing"}</h3>
            <p className="mt-2 mb-3">
              John is a Senior Developer, mainly works in backend technologies.
            </p>
            <div className="flex gap-2">
              <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                Discrete Math
              </span>
              <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                Topology
              </span>
              <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                Neural Nets
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={logout}
        className="text-red-400 bg-red-800 p-4 mx-3 rounded-xl"
      >
        Logout
      </button>
      <button
        onClick={()=>setShow(!show)}
        className="text-red-400 bg-red-800 p-4 rounded-xl"
      >
        Show
      </button>
    </section>
  );
}

export default page;
