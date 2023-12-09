import { Link } from "react-router-dom"
import ButtonHomeView from "../homeview/ButtonHomeView"
import ButtonHeader from "./ButtonHeader"
import "./style.css"


const AppHeadder = () => {
    return (
        <>
            <div className="app-header">
                <nav className="nav-buttons">
                    <Link to="/home">
                        <ButtonHeader label="HOME" />
                    </Link>
                    <Link to="/aboutMe">
                        <ButtonHeader label="ABOUT ME" />
                    </Link>
                    <Link to="/services">
                        <ButtonHeader label="SERVICES" />
                    </Link>
                    <Link to="/skills">
                        <ButtonHeader label="SKILLS" />
                    </Link>
                    <Link to="/portfolio">
                        <ButtonHeader label="PORTFOLIO" />
                    </Link>
                    <Link to="/contact">
                        <ButtonHeader label="CONTACT" />
                    </Link>



                    <ButtonHomeView label="HIRE ME" />

                </nav>

            </div>

        </>
    )
}
export default AppHeadder