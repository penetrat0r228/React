import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import UserDetailsPage from "../pages/UserDetailsPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id',
                element: <UserDetailsPage/>,
                children: [
                    {path: 'posts', element: <PostsPage/>}
                ]
            },
        ],
    }
])