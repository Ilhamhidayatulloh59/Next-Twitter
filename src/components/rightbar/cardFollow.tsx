import { Avatar } from "../Avatar"
import { UserState } from "@/types/user"

export const CardFollow = ({ data }: { data: UserState }) => {
    const src = data.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    return (
        <div 
            className={`flex text-white justify-between items-center rounded-full cursor-pointer bg-transparent`}
        >
            <div className="flex gap-3">
                <Avatar src={src} alt={data.username} />
                <div className="hidden md:block">
                    <p>{data.username}</p>
                    <p className="text-[14px]">{data.email}</p>
                </div>
            </div>
            <button className="text-[10px] font-bold text-black bg-white py-1 px-2 rounded-full">
                IKUTI
            </button>
        </div>
    )
}