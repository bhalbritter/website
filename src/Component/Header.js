import react, {useRef, useState,useLayoutEffect} from 'react'
import '../Stylesheets/Header.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {

    const [show, doShow] = useState({
        isResponsive: false,
        isSticky: false
    });

    const ourRef = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        const navbarPos = topPos(ourRef.current);

        const onScroll = () => {
            const scrollPos = window.pageYOffset ;
            if (navbarPos  < scrollPos){
                doShow((state) => ({...state, isSticky: true}));
            }else{
                doShow((state) => ({...state, isSticky: false}));
            }

        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    const myFunction = () => {
        doShow((state) => ({...state, isResponsive: !state.isResponsive}))
    }

    function getNavClassNames(){
        let myClasses = "";
        if(show.isResponsive){
            myClasses+= "topnav responsive";
        }else{
            myClasses += "topnav";
        }

        if(show.isSticky){
            myClasses += " sticky";
        }

        return myClasses;
    }


    return(
        <div className="container">
        <div className={getNavClassNames()}  ref={ourRef} id="myTopnav">
            <Link activeClass="active" className="active" to="welcome-section" spy={false} smooth={true} duration={500} >Home</Link>
            <Link activeClass="active" className="active" to="graph" spy={false} smooth={true} duration={500} >Overview</Link>
            <Link activeClass="active" className="active" to="experience" spy={false} smooth={true} duration={500} >Experience</Link>
            <Link activeClass="active" className="active" to="project" spy={false} smooth={true} duration={500} >Projects</Link>
            <a className="icon" onClick={myFunction}>&#9776;</a>
        </div>
            {show.isSticky ? <div id="playsholder"></div> :<div></div>}
        </div>
    )
}

export default Header
