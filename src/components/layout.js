import React from "react";
import Header from "./header";

export default function Layout({el}) {
    // Layout can be used for wrapping components
    return <>
        <Header/>
        {el}
    </>
}


