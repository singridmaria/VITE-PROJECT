import { Link } from "react-router-dom"
import About from "../about/About"
import Contact from "../contact/contact"
import Portfolio from "../portfolio/Portfolio"
import Services from "../services/Services"
import Skills from "../skills/Skills"
import ButtonHeader from "../../components/header/ButtonHeader"

const Principal = () => {
    return (
        <>
            <About />
            <Link to="/aboutMe">
                <ButtonHeader label="ABOUT ME" />
            </Link>

            <Services />
            <Link to="/services">
                <ButtonHeader label="SERVICES" />
            </Link>


            <Skills />
            <Link to="/skills">
                <ButtonHeader label="SKILLS" />
            </Link>

            <Portfolio />
            <Link to="/portfolio">
                <ButtonHeader label="PORTFOLIO" />
            </Link>


            <Contact />
            <Link to="/contact">
                <ButtonHeader label="CONTACT" />
            </Link>
        </>
    )
}


export default Principal