"use server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function checkAuth(): Promise<boolean> {
    const myCookies = await cookies()
    const token = myCookies.get("token")?.value
    return !!token
}

export async function logoutAction() {
    const myCookies = await cookies()
    myCookies.delete("token")
    revalidatePath("/")
}