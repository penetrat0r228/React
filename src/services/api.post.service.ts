import axios from "axios";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPost = async (id: number): Promise<IPostModel> => {
    const {data} = await axiosInstance.get<IPostModel>(`/posts/${id}`);
    return data;
};

export const getUserPosts = async (userId: number): Promise<IPostModel[]> => {
    const {data} = await axiosInstance.get<IPostModel[]>(`/posts`, {
        params: {userId}
    });
    return data;
};