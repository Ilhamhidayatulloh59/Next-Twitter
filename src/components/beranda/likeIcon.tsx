'use client'

import { ITweet } from "@/types/tweet";
import { IconOption } from "./icon"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { likeTweet } from "@/libs/actions/tweet";
import { tagRevalidate } from "@/libs/actions/server";

export const LikeIcon = ({ item }: { item: ITweet }) => {
    const onLike = async () => {
        await likeTweet(item.id)
        tagRevalidate('tweets')
    }

    return (
        <div onClick={onLike}>
            <IconOption 
                color="pink" 
                count={item.likes} 
                active={item.isLike} 
                Icon={item.isLike ? IoMdHeart : IoMdHeartEmpty} 
            />
        </div>
    )
}