import ButtonHomeView from "../homeview/ButtonHomeView"
import ButtonHeader from "./ButtonHeader"
import "./style.css"

const AppHeadder = () => {
    return(
    <>
    <div className="container app-header">
    <ButtonHeader label="HOME" />
    <ButtonHeader label="ABOUT ME"/>
    <ButtonHeader label="SERVICES"/>
    <ButtonHeader label="SKILLS"/>
    <ButtonHeader label="PORTFOLIO"/>
    <ButtonHeader label="CONTACT"/>
    <ButtonHomeView/>
    </div>
    </>
    )
}
export default AppHeadder