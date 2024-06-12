import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
        const path1=request.nextUrl
        const path=request.nextUrl.pathname
        console.log(" path1 is :" + path1)
        const isPublicPath=path ==="/login" || path==='/signup'
        const token=request.cookies.get("token")?.value || ''

        if(isPublicPath && token){
                return NextResponse.redirect(new URL('/user',request.nextUrl));
        }
        if(!isPublicPath && !token){
                return NextResponse.redirect(new URL('/login',request.nextUrl));
        }
       

    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
        "/",
        "/profile",
        "/user",
        "/signup",
        "/login"

  ]
}