import { UserInput, UserLogin, UserState } from "@/types/user"
import { getCookie } from "./server"

export const registerUser = async (data: UserInput) => {
    const res = await fetch('http://localhost:2000/api/auth', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    })

    return res.json()
}

export const loginUser = async (data: UserLogin) => {
    const res = await fetch('http://localhost:2000/api/auth/login', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    const response = await res.json()

    return { result: response, ok: res.ok }
}

export const getActiveUser = async () => {
    const token = await getCookie('token')
    interface Response {
        status: string;
        users: UserState[]
    }
    const res = await fetch('http://localhost:2000/api/users/active', {
        headers: {
            "Authorization": `Bearer ${token?.value}`
        },
        next: { revalidate: 60 }
    })
    const response: Response = await res.json()
    return { result: response, ok: res.ok }
}

export const verifyUser = async (token: string) => {
    const res = await fetch('http://localhost:2000/api/auth/verify', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "PATCH",
    })
    const response = await res.json()

    return { result: response, ok: res.ok }
}