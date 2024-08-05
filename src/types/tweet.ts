export interface ITweet {
    id: number;
    content: string;
    media?: string | null;
    createdAt: string;
    likes: number;
    user: {
        username: string;
        email: string;
        avatar: string | null
    };
    isLike: boolean
}