import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import About from "../views/about/About"
import Services from "../views/services/Services"
import Skills from "../views/skills/Skills"
import Portfolio from "../views/portfolio/Portfolio"
import Contact from "../views/contact/contact"
import HomeView from "../views/home/HomeView"
import Principal from "../views/home/Principal"
import Dashboard from "../views/dashboard/dashboard"


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeView />,
        children: [
            {
                path: '/home',
                element: <Principal />
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
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            


        ]
    }
])

export default router