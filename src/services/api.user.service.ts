import axios from "axios";
import {BaseResponseType} from "../models/BaseResponseType";
import {IUserModel} from "../models/IUserModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async (): Promise<IUserModel[]> => {
    const {data} = await axiosInstance.get<IUserModel[]> ('/users');
    return data
};
export const getUser = async (id: string): Promise<IUserModel> => {
    return (await axiosInstance.get<IUserModel>(`/users/${id}`)).data;
};