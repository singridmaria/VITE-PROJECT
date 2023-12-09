import AppFooter from "../../components/footer/AppFooter"
import Header from "../header/Header"
import Home from "./Principal"
import "./style.css"
import { Outlet } from "react-router-dom"

const HomeView = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <AppFooter />

        </>
    )
}


export default HomeView