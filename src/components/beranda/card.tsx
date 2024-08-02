import Link from "next/link"
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChartOutline } from "react-icons/io5";
import { IconOption } from "./icon";
import { ITweet } from "@/types/tweet";
import formatDate from "@/utils/formatDate";

export const CardTweet = ({ data }: { data: ITweet }) => {
    const src = data.user.avatar || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
    return (
        <div key={data.id} className="flex p-4 border-[0.1px] border-b-gray-500 border-black">
            <div className="w-12">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src={src}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="w-full">
                <div className="flex gap-1 px-2">
                    <Link href={'/beranda'} className="font-bold hover:underline">{data.user?.username}</Link>
                    <span className="text-gray-500">{data.user?.email}</span>
                    <span>·</span>
                    <span className="text-gray-500">{formatDate(data.createdAt)}</span>
                </div>
                <div className="px-2">{data.content}</div>
                <div className="flex px-2 justify-between">
                    <IconOption color="blue" Icon={FaRegComment} />
                    <IconOption color="green" Icon={AiOutlineRetweet} />
                    <IconOption color="pink" Icon={CiHeart} />
                    <IconOption color="blue" Icon={IoStatsChartOutline} />
                </div>
            </div>
        </div>
    )
}