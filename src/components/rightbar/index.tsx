import { IoSearchOutline } from "react-icons/io5";
import { CardFollow } from "./cardFollow";
import { getActiveUser } from "@/libs/actions/user";

export default async function RightBar() {
    const { result } = await getActiveUser()
    return (
        <div className="w-[300px] ml-8">
            <label className="input input-bordered h-[42px] my-1 bg-gray-600 bg-opacity-90 text-gray-400 rounded-full flex items-center gap-2">
                <IoSearchOutline className="text-[22px]" />
                <input type="text" className="grow" placeholder="Cari" />
            </label>
            <div className="bg-black border p-4 rounded-xl text-white border-gray-500 flex flex-col gap-4">
                <p className="text-xl font-bold">Untuk diikuti</p>
                {
                    result.users?.map((item) => {
                        return (
                            <div key={item.id}>
                                <CardFollow data={item} />
                            </div>
                        )
                    })
                }
                <p className="text-sm cursor-pointer text-blue-500 font-bold">Tampilkan lebih banyak</p>
            </div>
        </div>
    )
}