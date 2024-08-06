"use client"
import { navigate } from "@/libs/actions/server";
import { verifyUser } from "@/libs/actions/user";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string }}) {
    const onVerify = async (token: string) => {
        try {
            const { result, ok } = await verifyUser(token)
            if (!ok) throw result.msg
            toast.info(result.msg)
            navigate('/')
        } catch (err) {
            toast.error(err as string)
            console.log(err);
        }
    }
    
    return (
        <div className="flex flex-col gap-3 min-h-screen min-w-screen justify-center items-center">
            <h1 className="text-white font-bold text-xl">Verification</h1>
            <button onClick={() => onVerify(params.token)} className="bg-blue-500 p-2 rounded-sm w-[100px]">Verify</button>
        </div>
    )
}