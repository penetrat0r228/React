import axios from "axios";
import {IUser} from "../models/IUser";
import {IDJResponce} from "../models/IDJResponce";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
    });

export const apiService = {
    user: {
        getAll: async (page: number): Promise<IDJResponce & { users: IUser[] }> => {
            const skip = (page - 1) * 10;

            const { data } = await axiosInstance.get<IDJResponce & { users: IUser[] }>('/users', {
                params: {
                    skip: skip,
                    limit: 10
                }
            });

            return data;
        }
    }
};

