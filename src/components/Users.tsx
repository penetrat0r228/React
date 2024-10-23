import React, {FC} from "react";
import {IUser} from "../models/IUser";

type UsersProps = {
    users: IUser[];
}
const Users: FC<UsersProps> = ({users}) => {
    return (
        <div>
            <h2>Список користувачів</h2>
            <ul>
            {users.map(user=> (
                    <li key={user.id} style={{display: 'flex', gap: '10px'}}>
                        <span>{user.id}</span>
                        <span>{user.firstName}</span>
                        <span>{user.lastName}</span>
                        <span>{user.age}</span>
                        <span>{user.gender}</span>
                        <span>{user.email}</span>
                    </li>
                    ))}
            </ul>
        </div>
    );
};

export default Users;