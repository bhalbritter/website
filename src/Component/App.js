import React from 'react'
import Header from './Header'
import WelcomeSection from './WelcomeSection'
import Projects from'./Projects'
import Links from './Links'
import Footer from './Footer'
import Graph from './Graph'
import Experience from './Experience'
import Timeline from './Timeline'
import '../Stylesheets/Website.css'


function App(){

    return(
                <div className="Container">
                    <WelcomeSection />
                    <Header />
                    <Graph/>
                    <Experience />
                    <Timeline />
                    <Links />
                    <Footer />
                </div>

    )
}

export default App
