import AppFooter from "../../components/footer/AppFooter"
import Header from "../header/Header"
import "./style.css"
import { Outlet, Link } from "react-router-dom"

const HomeView = () => {
    return (
        <>
            <Header />
    
            <AppFooter />

        </>
    )
}


export default HomeView