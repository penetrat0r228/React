import React, {useEffect, useState} from "react";
import PaginationComponent from "../components/PaginationComponent";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Users from "../components/Users";
import {IUser} from "../models/IUser";

const UsersPage = () => {
    const [query, setquery] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');

        if (page) {
            apiService.user
                .getAll(+page)
                .then(value => {
                    setUsers(value.users);
                    const lastId = value.users[value.users.length - 1].id;
                    if (lastId >= value.total) {
                        setFlag(true);
                    } else {
                        setFlag(false);
                    }
                });
        }
    }, [query]);

    return (
        <div>
            <Users users={users}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};


export default UsersPage;