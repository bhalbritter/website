import {useLayoutEffect, useRef, useState} from 'react'
import styled from "styled-components"
import '../Stylesheets/Experience.css'

const Experience = () => {
    //state that decides to if the item is shown or not
    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false,
        itemFour: false,
        itemFive: false,
        itemSix: false,
        itemSeven: false
    });

    let div1Pos, div2Pos, div3Pos, div4Pos, div5Pos, div6Pos, div7Pos;

    //how much
    const [percentShowm, setPercentShow] = useState({
        itemOne: 0,
        itemTwo: 0,
        itemThree: 0,
        itemFour: 0,
        itemFive: 0,
        itemSix: 0,
        itemSeven: 0,
    });

    const refOne = useRef(null),
        refTwo = useRef(null),
        refThree = useRef(null),
        refFour = useRef(null),
        refFive = useRef(null),
        refSix = useRef(null),
        refSeven = useRef(null);

    // this hook is important to ajust the positions of the divs when a resize occours
    useLayoutEffect(() => {
        const convertStyle = () => {
            const topPos = (element) => element.getBoundingClientRect().top + window.scrollY - window.innerHeight;
            const getHeight = (element) => element.offsetHeight;

            div1Pos = topPos(refOne.current)
            div2Pos = topPos(refTwo.current)
            div3Pos = topPos(refThree.current)
            div4Pos = topPos(refFour.current)
            div5Pos = topPos(refFive.current)
            div6Pos = topPos(refSix.current)
            div7Pos = topPos(refSeven.current)
        };
        window.addEventListener("resize", convertStyle, {passive: true});
    }, []);

    // this hook has the on Scroll method, that decides when to show the divs
    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top + window.scrollY;
        const getHeight = (element) => element.offsetHeight;

        div1Pos = topPos(refOne.current)
        div2Pos = topPos(refTwo.current)
        div3Pos = topPos(refThree.current)
        div4Pos = topPos(refFour.current)
        div5Pos = topPos(refFive.current)
        div6Pos = topPos(refSix.current)
        div7Pos = topPos(refSeven.current)

        const div3Height = getHeight(refThree.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (div4Pos < scrollPos) {
                doShow((state) => ({...state, itemFour: true}));
            } else if (div4Pos > scrollPos) {
                doShow((state) => ({...state, itemFour: false}));
            }

            if (div1Pos > scrollPos) {
                doShow((state) => ({...state, itemOne: false}));
            } else if (div1Pos < scrollPos) {
                doShow((state) => ({...state, itemOne: true}));
            }

            if (div5Pos > scrollPos) {
                doShow((state) => ({...state, itemFive: false}));
            } else if (div5Pos < scrollPos) {
                doShow((state) => ({...state, itemFive: true}));
            }

            if (div6Pos > scrollPos) {
                doShow((state) => ({...state, itemSix: false}));
            } else if (div6Pos < scrollPos) {
                doShow((state) => ({...state, itemSix: true}));
            }

            if (div7Pos > scrollPos) {
                doShow((state) => ({...state, itemSeven: false}));
            } else if (div7Pos < scrollPos) {
                doShow((state) => ({...state, itemSeven: true}));
            }


            if (div2Pos > scrollPos) {
                doShow((state) => ({...state, itemTwo: false}));
            } else if (div2Pos < scrollPos) {
                doShow((state) => ({...state, itemTwo: true}));
            }

            if (div3Pos < scrollPos) {
                doShow((state) => ({...state, itemThree: true}));

                let itemThreePercent = ((scrollPos - div3Pos) * 100) / div3Height;
                if (itemThreePercent > 100) itemThreePercent = 100;
                if (itemThreePercent < 0) itemThreePercent = 0;

                setPercentShow((prevState) => ({
                    ...prevState,
                    itemThree: itemThreePercent
                }));
            } else if (div3Pos > scrollPos) {
                doShow((state) => ({...state, itemThree: false}));
            }
        };
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="experienceContainer" name="experience">
            <h1 id="title">Working experience</h1>
            <Div className="lineContainer"
                 animate={show.itemSeven}
                 animatePercent={percentShowm.itemSeven}
                 ref={refSeven}>
                <div id="container7"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong> Since 06/22 </strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Co-Founder: PtySpark UG (haftungsbeschränkt)</strong>
                        <p>goal: Bring people together with the help of an app and at the same time find them the right event</p>
                    </div>
                </div>
            </Div>
            <Div className="lineContainer"
                 animate={show.itemSix}
                 animatePercent={percentShowm.itemSix}
                 ref={refSix}>
                <div id="container6"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong> Since  03/22  </strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Working Student at ASAP Group</strong>
                        <p>responsibilitys: Further development of a system for intelligent detection of signs and traffic lights in road traffic </p>
                    </div>
                </div>
            </Div>
            <Div className="lineContainer"
                 animate={show.itemFive}
                 animatePercent={percentShowm.itemFive}
                 ref={refFive}>
                <div id="container5"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong> 10/21 <br></br>till <br></br> 02/22 </strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Internship at ASAP Group</strong>
                        <p>responsibilitys: Further development of a React-based editor</p>
                    </div>
                </div>
            </Div>
            <Div className="lineContainer"
                 animate={show.itemThree}
                 animatePercent={percentShowm.itemThree}
                 ref={refThree}>
                <div id="container1"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong> 05/20 <br></br>till <br></br> 09/21 </strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Working Student at Krones AG</strong>
                        <p>responsibilitys: development and implementation of applications for processes in the
                            purchasing process</p>
                    </div>
                </div>
            </Div>
            <Div className="lineContainer"
                 animate={show.itemTwo}
                 ref={refTwo}>
                <div id="container2"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong>Since 10/19</strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Student at Ostbayerische Technische Hochschule Regensburg </strong>
                        <p>Field of study: Computer Science</p>
                    </div>
                </div>
            </Div>
            <Div className="lineContainer"
                 animate={show.itemOne}
                 ref={refOne}>
                <div id="container3"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong>02/18 <br></br>till <br></br>08/18</strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Internship at BFFT Fahrzeugtechnik (today EDAG Group)</strong>
                        <p>responsible for developing an application for processing log data from test drives</p>
                    </div>
                </div>
            </Div>
            <Div className="lineContainer"
                 animate={show.itemFour}
                 ref={refFour}>
                <div id="container4"></div>
                <div className="myDiv">
                    <div className="titleDiv">
                        <strong> 09/15 <br></br>till <br></br> 08/18 </strong>
                    </div>
                    <div className="contentDiv">
                        <strong>Apprenticeship at EDV Schulen des Landkreises Deggendorf</strong>
                        <p>apprenticeship title: Computer Science Expert Subject Area: Software Developement</p>
                    </div>
                </div>
            </Div>
        </div>
    )
}

// custom div for animations
const Div = styled.div`
  width: auto;
  transform: translateX(${({animate}) => (animate ? "0" : "-100vw")});
  transition: transform 2s;
  margin: 20px;
  opacity: ${({animatePercent}) =>
          animatePercent ? `${animatePercent / 100}` : `1`};
`;

export default Experience;


