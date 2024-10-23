import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getPost} from "../services/api.post.service";
import {IPostModel} from "../models/IPostModel";

const PostsPage = () => {
    const {userId} = useParams<{userId: string}>();
    const [post, setPost] = useState<IPostModel | null>(null);

    useEffect(() => {
        const fetchPost = async () =>{
            if (userId) {
                const fetchedPost = await getPost(Number(userId));
                setPost(fetchedPost);
            }
        };
        fetchPost();
    }, [userId]);

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PostsPage;