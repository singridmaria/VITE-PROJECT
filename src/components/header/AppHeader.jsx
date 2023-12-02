import { Outlet, Link } from "react-router-dom"
import ButtonHomeView from "../homeview/ButtonHomeView"
import ButtonHeader from "./ButtonHeader"
import "./style.css"


const AppHeadder = () => {
    return (
        <>
            <div className="app-header">
                <nav className="nav-buttons">
                    <Link to="/">
                        <ButtonHeader label="HOME" />
                    </Link>
                    <Link to="/AboutMe">
                        <ButtonHeader label="ABOUT ME" />
                    </Link>
                    <Link to="/Services">
                        <ButtonHeader label="SERVICES" />
                    </Link>
                    <Link to="/Skills">
                        <ButtonHeader label="SKILLS" />
                    </Link>
                    <Link to="/Portfolio">
                        <ButtonHeader label="PORTFOLIO" />
                    </Link>
                    <Link to="/Contact">
                        <ButtonHeader label="CONTACT" />
                    </Link>



                    <ButtonHomeView label="HIRE ME" />

                </nav>

            </div>
            <Outlet />
        </>
    )
}
export default AppHeadder