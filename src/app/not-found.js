import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-indigo-600 flex justify-center content-center flex-wrap">
    <p className="font-sans text-black error-text">404 | Page not Found</p>

  
  <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
    <span className="opacity-50">Take me back to</span>
     <Link className="underline underline-offset-2 pl-2 text-black" href="/">Home</Link>
  </div>
  </div>
  )
}