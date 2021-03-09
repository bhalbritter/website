import react from 'react'
import Button from '@material-ui/core/Button';
import '../Stylesheets/WelcomeSection.css'

function WelcomeSection(){
    return(
        <div id= "welcome-section" name="welcome-section">
        <h1>Hey, I am Benedikt</h1>
        <p>a software developer.</p>
            <Button target="_blank" variant="contained" id="getInTouch" href="mailto:mail@benedikt-halbritter.de">
                get in touch
            </Button>
        </div>
    )
}
export default WelcomeSection
