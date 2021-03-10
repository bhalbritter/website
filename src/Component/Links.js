import react from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import '../Stylesheets/Links.css'

function Links(){
    return(
        <div id="links">
            <h1>Let's work together...</h1>
            <div id="link-container">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/benedikt-halbritter-264a73204/"
                    className="btn contact-details"
                ><LinkedInIcon /> LinkedIn</a
                >
                <a
                    id="profile-link"
                    href="https://github.com/bhalbritter"
                    target="_blank"
                    className="btn contact-details"
                ><GitHubIcon id="GitIcon" /> GitHub</a
                >
                <a target="_blank" href="mailto:mail@benedikt-halbritter.de" className="btn contact-details"
                ><Email /> Send a mail</a
                >
            </div>
        </div>
    )
}
export default Links
