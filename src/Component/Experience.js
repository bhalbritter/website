import react, {useLayoutEffect, useRef, useState} from 'react'
import styled from "styled-components"
import '../Stylesheets/Experience.css'

const Experience = () =>  {

    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false,
        itemFour: false
    });

    const [percentShowm, setPercentShow] = useState({
        itemOne: 0,
        itemTwo: 0,
        itemThree: 0,
        itemFour: 0

    });

    const ourRef = useRef(null),
          anotherRef = useRef(null),
          refThree = useRef(null),
          refFour = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        const div1Pos = topPos(ourRef.current),
            div2Pos = topPos(anotherRef.current),
            div3Pos = topPos(refThree.current),
            div4Pos = topPos(refFour.current);

        const div3Height = getHeight(refThree.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (div4Pos < scrollPos){
                doShow((state) => ({...state, itemFour: true}));
            }else if (div4Pos > scrollPos) {
                doShow((state) => ({ ...state, itemFour: false }));
            }

            if (div1Pos > scrollPos) {
                doShow((state) => ({ ...state, itemOne: false }));
            }else  if (div1Pos < scrollPos) {
                doShow((state) => ({...state, itemOne: true}));
            }

            if (div2Pos > scrollPos) {
                doShow((state) => ({ ...state, itemTwo: false }));
            }else if (div2Pos < scrollPos) {
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
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    return (
        <div className="experienceContainer" id="experience">
            <h1 id="title">Working experience</h1>
        <Div className="lineContainer"
             animate={show.itemThree}
             animatePercent={percentShowm.itemThree}
             ref={refThree}>
            <div id="container1"></div>
            <div className="frontDiv">
                Since 05/20
            </div>
            <div className="backDiv">
                <strong>Working Student at Krones AG</strong>
                <p>responsibilitys: development and implementation of applications for processes in the purchasing process</p>
            </div>
        </Div>
        <Div className="lineContainer"
             animate={show.itemTwo}
             ref={anotherRef}>
                <div id="container2"></div>
                <div className="frontDiv">
                    Since 10/19
                </div>
                <div className="backDiv" >
                    <strong>Student at Ostbayerische Technische Hochschule Regensburg </strong>
                    <p>Field of study: Computer Science</p>

                </div>
        </Div>
        <Div className="lineContainer"
                 animate={show.itemOne}
                 ref={ourRef}>
                <div id="container3"></div>
                <div className="frontDiv">
                     02/18 <br></br>till 08/18
                </div>
                <div className="backDiv" >
                    <strong>Internship at BFFT Fahrzeugtechnik (today EDAG Group)</strong>
                    <p>responsible for developing an application for processing log data from test drives</p>
                </div>
        </Div>
            <Div className="lineContainer"
                 animate={show.itemFour}
                 ref={refFour}>
                <div id="container4"></div>
                <div className="frontDiv">
                    09/15 <br></br>till 08/18
                </div>
                <div className="backDiv" >
                    <strong>Apprenticeship at EDV Schulen des Landkreises Deggendorf</strong>
                </div>
            </Div>
        </div>
    )
}

const Div = styled.div`
  width: auto;
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 2s;
  margin: 20px;
  opacity: ${({ animatePercent }) =>
    animatePercent ? `${animatePercent / 100}` : `1`};
`;


export default Experience;


