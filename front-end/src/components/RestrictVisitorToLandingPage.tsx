import {getCookie} from "./Cookies";
import {Outlet, Navigate} from "react-router-dom";

const RestrictVisitorToLandingPage = () => {

    return getCookie("loginToken") ? <Navigate to={"../dashboard/"} /> : <Outlet/>

};

export default RestrictVisitorToLandingPage;
