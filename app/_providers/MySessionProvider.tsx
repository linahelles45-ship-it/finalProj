// "use client"
// import React from 'react'
// import { SessionProvider } from "next-auth/react"

// export default function MySessionProvider( {children} ) {
//     return (
//     <>
//     <SessionProvider>
//         {children}
//     </SessionProvider>
//     </>
//     )}


"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"

export default function MySessionProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}