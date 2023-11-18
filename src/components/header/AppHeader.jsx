import ButtonHomeView from "../homeview/ButtonHomeView"
import ButtonHeader from "./ButtonHeader"
import Menu from "./Menu"
import "./style.css"

const AppHeadder = () => {
    return (
        <>
            <div className="app-header">
                <nav className="nav-buttons">
                    <ButtonHeader label="HOME" />
                    <ButtonHeader label="ABOUT ME" />
                    <ButtonHeader label="SERVICES" />
                    <ButtonHeader label="SKILLS" />
                    <ButtonHeader label="PORTFOLIO" />
                    <ButtonHeader label="CONTACT" />
                    <ButtonHomeView label="HIRE ME" />

                </nav>
                <div className="menu">
                    <Menu />
                </div>
            </div>
        </>
    )
}
export default AppHeadder