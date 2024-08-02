import { FaEllipsisH } from "react-icons/fa"
import { Avatar } from "../Avatar"

export const CardFollow = () => {
    return (
        <div 
            className={`flex text-white justify-between items-center rounded-full cursor-pointer bg-transparent`}
        >
            <div className="flex gap-3">
                <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
                <div className="hidden md:block">
                    <p>John</p>
                    <p className="text-[14px]">john@gmail.com</p>
                </div>
            </div>
            <button className="text-[10px] font-bold text-black bg-white py-1 px-2 rounded-full">
                IKUTI
            </button>
        </div>
    )
}