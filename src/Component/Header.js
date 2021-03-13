import {useLayoutEffect, useRef, useState} from 'react'
import '../Stylesheets/Header.css'
import {animateScroll as scroll, Link} from 'react-scroll'

const Header = () => {

    //state that decides whether the navbar is in mobile Mode or its fixed to the top
    const [show, doShow] = useState({
        isResponsive: false,
        isSticky: false
    });

    const ourRef = useRef(null);

    let navbarPos;

    //Hook is needed if a size change occurs
    useLayoutEffect(() => {

        const convertStyle = () => {
            const topPos = (element) => element.getBoundingClientRect().top;
            const getHeight = (element) => element.offsetHeight;

            navbarPos = window.innerHeight - getHeight(ourRef.current);

            if (navbarPos == 0) {
                navbarPos += window.innerHeight - getHeight(ourRef.current);
            }

        };
        window.addEventListener("resize", convertStyle, {passive: true});
        window.addEventListener("DOMContentLoaded", convertStyle, {passive: true});
    }, []);

    // decides if the navbar is sticky or not (based on scroll)
    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        navbarPos = topPos(ourRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY;
            if (navbarPos < scrollPos) {
                doShow((state) => ({...state, isSticky: true}));
            } else {
                doShow((state) => ({...state, isSticky: false}));
            }

        };
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    const myFunction = () => {
        doShow((state) => ({...state, isResponsive: !state.isResponsive}))
    }

    const closeNavbar = () => {
        doShow((state) => ({...state, isResponsive: false}))
    }

    // creates the classes of the navbar based on the current state and whether its used on a Safari browser
    function getNavClassNames() {
        let myClasses = "";
        if (show.isResponsive) {
            myClasses += "topnav responsive";
        } else {
            myClasses += "topnav";
        }

        if (show.isSticky) {

            let userAgent = navigator.userAgent;
            let b = "";
            if (userAgent.indexOf("Safari") > -1) {
                b = "safari";
            }
            if (userAgent.indexOf("Chrome") > -1) {
                b = "chrome";
            }

            if (b == "safari") {
                myClasses += " stickySafari";
            } else {
                myClasses += " sticky";
            }

        }

        return myClasses;
    }


    return (
        <div className="container">
            <div className={getNavClassNames()} ref={ourRef} id="myTopnav">
                <Link activeClass="active"
                      onClick={closeNavbar}
                      className="active"
                      to="welcome-section"
                      spy={false}
                      smooth={true}
                      duration={500}
                >Home</Link>
                <Link activeClass="active"
                      onClick={closeNavbar}
                      className="active"
                      to="graph"
                      spy={false}
                      smooth={true}
                      duration={500}
                >Overview</Link>
                <Link activeClass="active"
                      onClick={closeNavbar}
                      className="active"
                      to="experience"
                      spy={false}
                      smooth={true}
                      duration={500}
                >Experience</Link>
                <Link activeClass="active"
                      onClick={closeNavbar}
                      className="active"
                      to="project"
                      spy={false}
                      smooth={true}
                      duration={500}
                >Projects</Link>
                <a className="icon" onClick={myFunction}>&#9776;</a>
            </div>
            {show.isSticky ? <div id="playsholder"></div> : <div></div>}
        </div>
    )
}

export default Header
