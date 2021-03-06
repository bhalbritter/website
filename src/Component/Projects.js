import react from 'react'

function Projects(){
    return(
        <div id="#projects">
                <h2>My current Projects</h2>
                <div id="project-container">
                    <div className="project-tile">
                        <img alt="Project picture"
                             src="https://assets.codepen.io/5435062/internal/screenshots/pens/ExgNrGo.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1607777258&width=960"></img>
                        <a><span className="code">&lt;</span>
                            Technical Documentation
                            <span className="code">&#47;&gt;</span>
                        </a>
                    </div>
                    <div className="project-tile">
                        <img
                            src="https://assets.codepen.io/5435062/internal/screenshots/pens/abmBdvz.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1607697011&width=960"> </img>
                        <a><span className="code">&lt;</span>
                            Landing Page
                            <span className="code">&#47;&gt;</span>
                        </a>
                    </div>
                    <div className="project-tile">
                        <img
                            src="https://assets.codepen.io/5435062/internal/screenshots/pens/wvzzXGw.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1607602490&width=960"> </img>
                        <a><span className="code">&lt;</span>
                            Lol Umfrage Projekt
                            <span className="code">&#47;&gt;</span>
                        </a>
                    </div>
                    <div className="project-tile">
                        <img
                            src="https://assets.codepen.io/5435062/internal/screenshots/pens/oNzzvom.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1607464961&width=960"> </img>
                        <a><span className="code">&lt;</span>
                            Tribut page
                            <span className="code">&#47;&gt;</span>
                        </a>
                    </div>
                </div>
                <button>Show all <i className="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default Projects
