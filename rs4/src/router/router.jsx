import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Chats from '../pages/Chats/Chats';
import AuthLayout from '../layout/AuthLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/chats',
                element: <Chats />
            },
            {
                path: '/chats/:username',
                element: <Chats />
            }
        ]
    }
])