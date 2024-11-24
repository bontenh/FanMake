import React from 'react';
import { StrictMode } from 'react';
import {Home} from './pages/Home';
import { Chat } from './pages/Chat';
import {StreamShow} from './components/StreamShow';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

export let RouteFanMake = () => {
    let router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/streams",
          element: <StreamShow />,
        },
        {
            path: "/chat",
            element: <Chat />,
          },
    ]);
    return (
        <StrictMode>
            <RouterProvider 
                future = 
                    {{
                        v7_fetcherPersist: true,
                        v7_normalizeFormMethod: true,
                        v7_partialHydration: true,
                        v7_skipActionErrorRevalidation: true,
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                router={router}
            />
        </StrictMode>
    )
}