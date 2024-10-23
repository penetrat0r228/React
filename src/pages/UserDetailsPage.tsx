import React, {useEffect, useState} from "react";
import {Outlet, Link, useParams} from "react-router-dom";
import {getUser} from "../services/api.user.service";
import {IUserModel} from "../models/IUserModel";

const UserDetailsPage = () => {
    let {id} = useParams();

    const [user, setUser] = useState<IUserModel | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (id) {
                const fetchedUser = await getUser(id);
                setUser(fetchedUser);
            }
        }
        fetchUserData();
        }, [id]);

    return (
        <div>
            {
                  user && (
                    <div>
                        <p><strong>ID:</strong>{user.id}</p>
                        <p><strong>Name:</strong>{user.name}</p>
                        <p><strong>Username:</strong>{user.username}</p>
                        <p><strong>Email:</strong>{user.email}</p>
                        <p><strong>Address:</strong> <br/>
                            {user.address.street} <br/>
                            {user.address.suite} <br/>
                            {user.address.city} <br/>
                            {user.address.zipcode}</p>
                        <p><strong>Phone:</strong>{user.phone}</p>
                        <p><strong>Website:</strong>{user.website}</p>
                        <p><strong>Company:</strong> <br/>
                            {user.company.name} <br/>
                            {user.company.catchPhrase} <br/>
                            {user.company.bs}</p>

                        <Link to={`/users/${user.id}/posts`}>View Posts</Link>
                        <Outlet/>
                    </div>
                  )
            }
        </div>
    );
};

export default UserDetailsPage;