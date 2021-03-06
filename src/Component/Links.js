import react from 'react'
import '../Stylesheets/Links.css'

function Links(){
    return(
        <div id="links">
            <h1>Let's work together...</h1>
            <p>How do you take your coffee</p>
            <div id="link-container">
                <a
                    href="https://facebook.com/freecodecamp"
                    target="_blank"
                    className="btn contact-details"
                ><i className="fab fa-facebook-square"></i> Facebook</a
                >
                <a
                    id="profile-link"
                    href="https://github.com/freecodecamp"
                    target="_blank"
                    className="btn contact-details"
                ><i className="fab fa-github"></i> GitHub</a
                >
                <a href="mailto:example@example.com" className="btn contact-details"
                ><i className="fas fa-at"></i> Send a mail</a
                >
                <a href="tel:555-555-5555" className="btn contact-details"
                ><i className="fas fa-mobile-alt"></i> Call me</a
                >
            </div>
        </div>
    )
}
export default Links
