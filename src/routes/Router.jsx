import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import About from "../views/about/About"
import Services from "../views/services/Services"
import Skills from "../views/skills/Skills"
import Portfolio from "../views/portfolio/Portfolio"
import Contact from "../views/contact/contact"
import Home from "../components/homeview/Home"


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/aboutMe',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },


        ]
    }
])

export default router