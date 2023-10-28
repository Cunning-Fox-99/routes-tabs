import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";

import DummyChart from "./tabs/dummyChart";
import DummyList from "./tabs/dummyList";
import DummyTable from "./tabs/dummyTable";
import RootEl from "./components/rootEl";
import Layout from "./components/layout";
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootEl/>,
        },
        {
            path: '/dummyChart',
            element: <Layout el={<DummyChart />}/>
        },
        {
            path: '/dummyList',
            element: <Layout el={<DummyList/>}/>
        },
        {
            path: '/dummyTable',
            element: <Layout el={<DummyTable/>}/>
        }
    ])

    return <RouterProvider router={router}/>
}

export default App;
