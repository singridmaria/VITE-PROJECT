import { createBrowserRouter } from "react-router-dom"
import App from "../App"

import About from "../views/about/About"
import Services from "../views/services/Services"
import Skills from "../views/skills/Skills"
import Portfolio from "../views/portfolio/Portfolio"
import Contact from "../views/contact/contact"


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/AboutMe',
                element: <About />
            },
            {
                path: '/Services',
                element: <Services />
            },
            {
                path: '/Skills',
                element: <Skills />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Contact',
                element: <Contact />
            },


        ]
    }
])

export default router