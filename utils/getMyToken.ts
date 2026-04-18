import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export  async function getMyToken(){
    const myCookies =   await  cookies()
   const tokenFromCookes =  myCookies.get("token")?.value
   console.log("tokenFromCookies" , tokenFromCookes);
   
   if(!tokenFromCookes) return null;

   const myTokenAfterCoded = await decode({
    token : tokenFromCookes ,
     secret : process.env.AUTH_SECRET !,
    });
  console.log("myTokenAfterCoded", myTokenAfterCoded?.realTokenFromBackEnd);
  return myTokenAfterCoded?.realTokenFromBackEnd;
} 