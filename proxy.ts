import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export default async function proxy( req : NextRequest) {

    const jwt = await getToken({req})
    console.log("jwt from proxy" , jwt);

    if(jwt == null){
      return NextResponse.redirect("https://localhost:3000/login")
    }
  return NextResponse.next()
}

export const config  = {
    matcher : ["/shop"],
}