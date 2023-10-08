import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-display">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;