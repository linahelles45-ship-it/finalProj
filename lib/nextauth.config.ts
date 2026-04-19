// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const nextAuthConfig: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email: {},
//                 password: {}
//             },
//             async authorize(credentials) {
//                 const res = await fetch("https://ecommerce.routemir.com/api/v1/auth/signin", {
//                     body: JSON.stringify(credentials),
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 });

//                 const finalRes = await res.json();
//                 console.log("finalRes", finalRes);

//                 if (finalRes.message === "success") {
//                     return {
//                         id : finalRes.user.id,
//                         name: finalRes.user.name,
//                         email: finalRes.user.email,
//                         realTokenFromBackEnd: finalRes.token,
//                     };
//                 }
//                 return null;
//             }
//         })
//     ],

//     callbacks: {
//         jwt(params) {
//             console.log("params from jwt", params);
//             if (params.user) {
//                 params.token.realTokenFromBackEnd = params.user.realTokenFromBackEnd;
//             }
//             return params.token;
//         },
//         session(params) {
//             console.log("params from session", params);
//             return params.session;
//         }
//     },

//     pages: {
//         signIn: "/login"
//     },

//     secret: process.env.BETTER_AUTH_SECRET
// };

// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const nextAuthConfig: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email: {},
//                 password: {},
//             },
//         async authorize(credentials) {
                
//         const loginData = {
//         email: credentials?.email,
//         password: credentials?.password
//         };

//                 const res = await fetch("https://ecommerce.routemir.com/api/v1/auth/signin", {
//                     body: JSON.stringify(loginData),
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 });

//                 const finalRes = await res.json();
//                 console.log("finalRes", finalRes);

//                 if (res.ok && finalRes.message === "success") {
//                     return {
//                         id: finalRes.user._id || finalRes.user.id,
//                         name: finalRes.user.name,
//                         email: finalRes.user.email,
//                         realTokenFromBackEnd: finalRes.token,
//                     };
//                 }
//                 return null;
//             }
//         })
//     ],

//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.realTokenFromBackEnd = user.realTokenFromBackEnd;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             // 🛠️ ضروري جداً لنقل التوكن من الـ JWT إلى واجهة الموقع (UI)
//             if (session.user) {
//                 (session.user ).realTokenFromBackEnd = token.realTokenFromBackEnd;
//             }
//             return session;
//         }
//     },

//     pages: {
//         signIn: "/login"
//     },

//     secret: process.env.NEXTAUTH_SECRET || process.env.BETTER_AUTH_SECRET
// };

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", { 
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        }),
                        method: "POST",
                        headers: { "Content-Type": "application/json" }
                    });
                    const finalRes = await res.json();
                    if (finalRes.message === "success") {
                        return {
                            id: finalRes.user._id,
                            name: finalRes.user.name,
                            email: finalRes.user.email,
                            realTokenFromBackEnd: finalRes.token,
                        };
                    }
                    return null;
                } catch {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.realTokenFromBackEnd = user.realTokenFromBackEnd;
            return token;
        },
        async session({ session, token }) {
            if (session.user) session.user.realTokenFromBackEnd = token.realTokenFromBackEnd;
            return session;
        }
    },
    pages: { signIn: "/login" },
    secret: process.env.NEXTAUTH_SECRET
};