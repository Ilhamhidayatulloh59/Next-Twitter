import { FaXTwitter } from "react-icons/fa6";

export const LoadingComp = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center perspective-1000">
            <FaXTwitter className="text-white text-[50px] animate-rotate-3d" />
        </div>
    );
}
