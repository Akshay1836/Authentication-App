import { delay } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-indigo-400">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-16 mx-2">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Auth<span className="text-indigo-600"> App</span>
            </h2>
            <h3 className="text-xl md:text-3xl mt-10 text-black">
              Welcome...!!
            </h3>
            <p className="text-md md:text-xl mt-10 text-black">
              
                Auth App
            
              is a simple authentication  app developed using Next JS and Tailwind CSS
            </p>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="m-3">
              <p
           
                title="Quicktoolz On Facebook"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <Link href={"/signup"} className="mx-auto">
                  Signup
                </Link>
              </p>
            </div>
            <div className="m-3">
              <p
            
                title="Quicktoolz On Twitter"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <Link href={"/login"} className="mx-auto">
                  Login
                </Link>
              </p>
            </div>
            {/* <div className="m-3">
                    <a href="#" title="Quicktoolz On Pinterest"
                        className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span className="mx-auto">Pintrest</span>
                    </a>
                </div>
                <div className="m-3">
                    <a href="#" title="Quicktoolz On Facebook"
                        className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span className="mx-auto">Reddit</span>
                    </a>
                </div> */}
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}
