import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers"
import wave from "../assets/wave.svg"
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName };
}
const Main = () => {
    const { userName } = useLoaderData();
    const [mode, setMode] = useState(localStorage.getItem("mode"));

    const getMode = (mode) => {
        setMode(mode);
        localStorage.setItem("mode", mode);
    }

    // useEffect(() => {
    //     setMode(localStorage.getItem("mode"));
    // }, [])

    return (
        <div className={`layout ${mode === "dark" ? "dark" : ""}`}>
            <Nav userName={userName} getMode={getMode} />
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    )
}

export default Main
