import react,{useRef, useState,useLayoutEffect} from 'react';
import ReactECharts from 'echarts-for-react';
import cloneDeep from 'lodash.clonedeep';
import echarts from 'echarts';
import '../Stylesheets/Graph.css'

const Graph: React.FC = () => {

    const [show, doShow] = useState({
        isLoaded: false
    });

    const ourRef = useRef(null);

    useLayoutEffect(() => {

        const topPos = (element) =>  element.getBoundingClientRect().top - element.getBoundingClientRect().height*4;
        const getHeight = (element) => element.offsetHeight;
        const navbarPos = topPos(ourRef.current);
        const onScroll = () => {
            const scrollPos = window.pageYOffset;
            if (navbarPos  < scrollPos){
                loadGraph();
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, []);


    const options = {

        title: {
            top: "bottom",
            left: "right"
        },
        tooltip: {show: false},
        legend: [{
            data: ["Interests", "Programming", "Sports", "Spare Time"]
        }],
        scaleLimit: {
            min: 0.4,
            max: 3
        },
        legend: {
          selected:{
              "Interests": false,
              "Programming": false,
              "Sports": false,
              "Spare Time": false
          },
          textStyle: {
              color: "#fff"
          }
        },

        animation: true,
        animationDuration: 1500,
        animationEasing: "quinticInOut",
        animationEasingUpdate: "quinticInOut",
        series: [{
            label: {show: true,
            overflow: "show"} ,
            name: "Les Miserables",
            type: "graph",
            layout: "none",
            data: [{
                id: "0",
                name: "Interests",
                symbolSize: 55,
                x: 0,
                y: 0,
                value: 28.685715,
                category: 0
            }, {
                    id: "1",
                    name: "Programming",
                    symbolSize: 80,
                    x: 115,
                    y: -75,
                    value: 28.685715,
                    category: 1
                },
                {
                    id: "2",
                    name: "Sports",
                    symbolSize: 50,
                    x: 80,
                    y: 150,
                    value: 28.685715,
                    category: 2
                },{
                    id: "3",
                    name: "Spare time",
                    symbolSize: 65,
                    x: -120,
                    y: 0,
                    value: 28.685715,
                    category: 3
                }, {
                    id: "4",
                    name: "Gym",
                    symbolSize: 40,
                    x: 90,
                    y: 45,
                    value: 28.685715,
                    category: 2
                }, {
                    id: "5",
                    name: "Swimming",
                    symbolSize: 65,
                    x: 200,
                    y: 130,
                    value: 28.685715,
                    category: 2
                }, {
                    id: "6",
                    name: "Running",
                    symbolSize: 50,
                    x: -30,
                    y: 140,
                    value: 28.685715,
                    category: 2
                }, {
                    id: "7",
                    name: "C/C#",
                    symbolSize: 35,
                    x: 170,
                    y: 35,
                    value: 28.685715,
                    category: 1
                }, {
                    id: "8",
                    name: "Java",
                    symbolSize: 35,
                    x: 185,
                    y: -170,
                    value: 28.685715,
                    category: 1
                },{
                    id: "9",
                    name: "Algorithms",
                    symbolSize: 65,
                    x: 265,
                    y: -110,
                    value: 28.685715,
                    category: 1
                },{
                    id: "10",
                    name: "Database",
                    symbolSize: 55,
                    x: 260,
                    y: 15,
                    value: 28.685715,
                    category: 1
                },{
                    id: "11",
                    name: "PlSQL",
                    symbolSize: 45,
                    x: 320,
                    y: 100,
                    value: 28.685715,
                    category: 1
                },{
                    id: "12",
                    name: "Web",
                    symbolSize: 40,
                    x: 10,
                    y: -150,
                    value: 28.685715,
                    category: 1
                },{
                    id: "13",
                    name: "React",
                    symbolSize: 35,
                    x: 100,
                    y: -190,
                    value: 28.685715,
                    category: 1
                },{
                    id: "14",
                    name: "Javascript",
                    symbolSize: 60,
                    x: -90,
                    y: -170,
                    value: 28.685715,
                    category: 1
                },{
                    id: "15",
                    name: "Html",
                    symbolSize: 40,
                    x: -50,
                    y: -80,
                    value: 28.685715,
                    category: 1
                },{
                    id: "16",
                    name: "Cars",
                    symbolSize: 30,
                    x: -140,
                    y: -92,
                    value: 28.685715,
                    category: 3
                },{
                    id: "17",
                    name: "Cooking",
                    symbolSize: 50,
                    x: -130,
                    y: 120,
                    value: 28.685715,
                    category: 3
                },{
                    id: "18",
                    name: "Travel",
                    symbolSize: 40,
                    x: -230,
                    y: 30,
                    value: 28.685715,
                    category: 3
                },{
                    id: "19",
                    name: "Long\nterm\ninvesting",
                    symbolSize: 60,
                    x: -240,
                    y: -100,
                    value: 28.685715,
                    category: 3
                }],
            links: [{
                id: "0",
                source: "0",
                target: "1"
            }, {
                    id: "1",
                    source: "0",
                    target: "2"
                },{
                id: "2",
                source: "0",
                target: "3"
            },{
                id: "3",
                source: "2",
                target: "4"
            },{
                id: "4",
                source: "2",
                target: "5"
            },{
                id: "5",
                source: "2",
                target: "6"
            },{
                id: "6",
                source: "1",
                target: "7"
            },{
                id: "7",
                source: "1",
                target: "8"
            },{
                id: "8",
                source: "1",
                target: "9"
            },{
                id: "9",
                source: "1",
                target: "10"
            },{
                id: "9",
                source: "10",
                target: "11"
            },{
                id: "10",
                source: "1",
                target: "12"
            },{
                id: "11",
                source: "12",
                target: "13"
            },{
                id: "12",
                source: "12",
                target: "14"
            },{
                id: "13",
                source: "12",
                target: "15"
            },{
                id: "14",
                source: "3",
                target: "16"
            },{
                id: "15",
                source: "3",
                target: "17"
            },{
                id: "16",
                source: "3",
                target: "18"
            },{
                id: "17",
                source: "3",
                target: "19"
            }
            ],
            categories: [{
                name: "Interests",
                color: "#fff"

            }, {
                name: "Programming"
            }, {
                name: "Sports"
            }, {
                name: "Spare Time"
            }
            ]
        }]
    };

    const [option, setOption] = useState(options);

    let loaded = false;
    function loadGraph(){

        if(!loaded){
        loaded = true;
        let newOption;

            newOption = cloneDeep(options);
            newOption.legend.selected["Interests"] = true;
            setOption(newOption);

        setTimeout(function() {
            newOption = cloneDeep(options);
            newOption.legend.selected["Interests"] = true;
            newOption.legend.selected["Programming"] = true;
            setOption(newOption);
        }, 1000);

        setTimeout(function() {
            newOption = cloneDeep(options);
            newOption.legend.selected["Interests"] = true;
            newOption.legend.selected["Programming"] = true;
            newOption.legend.selected["Sports"] = true;
            setOption(newOption);
        }, 2000);

        setTimeout(function() {
            newOption = cloneDeep(options);
            newOption.legend.selected["Interests"] = true;
            newOption.legend.selected["Programming"] = true;
            newOption.legend.selected["Sports"] = true;
            newOption.legend.selected["Spare Time"] = true;
            setOption(newOption);
        }, 3000);

        }
    }

    return (
        <div className="container2"  id="graph" name="test1">
            <h1 id="title"  ref={ourRef} >Overview </h1>
            <ReactECharts
                          className="diagram"
                          option={option}
                          style={{height: '90%'}}
            />
        </div>

    );
};

export default Graph;
