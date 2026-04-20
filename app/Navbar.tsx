// "use client"
// import  React , { useContext }  from "react";
// import Link from "next/link";
// import { CiHeart } from "react-icons/ci";
// import { FaShoppingCart , FaRegUserCircle } from "react-icons/fa";
// import Image from 'next/image'
// import logo from "@/asstes/images/logo.png"
// import { useSession, signOut } from "next-auth/react" 

// import {
//   navigationMenuTriggerStyle,
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { Button } from "@/components/ui/button";
// import { cartContext } from "./_context/CartContextProvider";


// export  default function Navbar() {

//       const  { numberOfCartItems } =  useContext(cartContext)

//    const session = useSession();
   
//    function handelLogout(){
//     signOut({ redirect : true , callbackUrl : "/login"})
//    }
//   return (
//     <NavigationMenu className="bg-gray-50 py-3 max-w-none justify-between px-20">

//     <div>
//         <Image src={logo.src} alt="logo" width={150} height={50} />
//     </div>

// <div className="w-1/2">
//   <input type="text" className="w-full  py-3 px-5 border rounded-2xl" placeholder="search for products, brands and more.."/>
// </div>

//       <NavigationMenuList className="text-lg">
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>categories</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="w-96">
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built with Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/"  className="bg-transparent hover:bg-transparent">Home</Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem> 

//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/cart" className="bg-transparent hover:bg-transparent">cart</Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>

//            <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/brands"  className="bg-transparent hover:bg-transparent">brands</Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>

//          <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/"  className="bg-transparent hover:bg-transparent"> <CiHeart /> </Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>


//          <NavigationMenuItem>
//           <NavigationMenuLink  asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/" className="bg-transparent hover:bg-transparent relative" >
//              <span className="bg-red-500 text-white text-xs p-1 rounded-xl absolute -top-2 right-0">{numberOfCartItems}</span>
//              <FaShoppingCart /> </Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>

//          <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/" className="bg-transparent hover:bg-transparent"> <FaRegUserCircle /> </Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>

//       {session.data ? <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Button className="bg-black hover:bg-black" onClick= {handelLogout}> logout </Button>
//           </NavigationMenuLink>
//         </NavigationMenuItem> :  <>
//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/login" className="bg-transparent hover:bg-transparent"> Login </Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link href="/signup" className="bg-transparent hover:bg-transparent">singup  </Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem> </>
// }

//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="flex flex-col gap-1 text-sm">
//             <div className="leading-none font-medium">{title}</div>
//             <div className="line-clamp-2 text-muted-foreground">{children}</div>
//           </div>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   )
  
// }

"use client"
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import Image from 'next/image'
import logo from "@/asstes/images/logo.png"
import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { cartContext } from "./_context/CartContextProvider";
import { checkAuth ,logoutAction } from "./_actions/auth.action";



export default function Navbar() {
    const { numberOfCartItems } = useContext(cartContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)  

    useEffect(() => {
        checkAuth().then(setIsLoggedIn) 
    }, [])

    async function handelLogout() {
        await logoutAction()  
        setIsLoggedIn(false)
        window.location.href = "/login"
    }

    return (
        <NavigationMenu className="bg-gray-50 py-3 max-w-none justify-between px-20">

            <div>
                <Image src={logo.src} alt="logo" width={150} height={50} />
            </div>

            <div className="w-1/2">
                <input type="text" className="w-full py-3 px-5 border rounded-2xl" placeholder="search for products, brands and more.." />
            </div>

            <NavigationMenuList className="text-lg">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-96">
                            <ListItem href="/categories" title="All Categories">
                                Browse all product categories.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/" className="bg-transparent hover:bg-transparent">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/cart" className="bg-transparent hover:bg-transparent">cart</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/brands" className="bg-transparent hover:bg-transparent">brands</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/" className="bg-transparent hover:bg-transparent"><CiHeart /></Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/cart" className="bg-transparent hover:bg-transparent relative">
                            {numberOfCartItems > 0 && (
                                <span className="bg-red-500 text-white text-xs p-1 rounded-xl absolute -top-2 right-0">
                                    {numberOfCartItems}
                                </span>
                            )}
                            <FaShoppingCart />
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/" className="bg-transparent hover:bg-transparent"><FaRegUserCircle /></Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


                {isLoggedIn ? (
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Button className="bg-black hover:bg-black" onClick={handelLogout}>
                                logout
                            </Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ) : (
                    <>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/login" className="bg-transparent hover:bg-transparent">Login</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/signup" className="bg-transparent hover:bg-transparent">Sign Up</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

