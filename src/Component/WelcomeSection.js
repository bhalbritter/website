import {useLayoutEffect} from 'react'
import Button from '@material-ui/core/Button';
import '../Stylesheets/WelcomeSection.css'

function WelcomeSection() {

    // resize welcome section if navbar is in mobile mode
    useLayoutEffect(() => {

        const convertStyle = () => {
            const height = window.innerHeight;
            let width = window.innerWidth;
            let element = document.getElementById("welcome-section")
            if (width >= 900) {
                element.style.height = `${height - 50}px`;
            } else {
                element.style.height = `${height}px`;
            }
        };
        window.addEventListener("resize", convertStyle, {passive: true});
        window.addEventListener("DOMContentLoaded", convertStyle, {passive: true});

    }, []);

    return (
        <div id="welcome-section" name="welcome-section">
            <h1>Hey, I am Benedikt</h1>
            <p>a software developer.</p>
            <Button target="_blank" variant="contained" id="getInTouch" href="mailto:mail@benedikt-halbritter.de">
                get in touch
            </Button>
        </div>
    )
}

export default WelcomeSection
