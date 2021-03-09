import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Button from '@material-ui/core/Button';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../Stylesheets/Timeline.css';
import website from '../Images/mywebsite.png'
import saCalc from '../Images/imgsacalc.png'
import GitHubIcon from '@material-ui/icons/GitHub';

export default function BasicTimeline() {
    return (
        <div className="mainDiv" id="project">
            <h1 id="title">Projects</h1>
            <p id="startTimeline">Late 2020 I get interested in Web-develpement</p>
        <Timeline align="alternate" className="myTimeline" >
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className="oppositeContent" >
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector  className="connector" style={{backgroundColor: "#be3144"}} id="firstConnector"/>
                </TimelineSeparator>
                <TimelineContent>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className="oppositeContent" >
                        TODO realease datum eintragen
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector  className="connector" style={{backgroundColor: "#be3144"}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <div className="Node">
                        <strong>Release of this website</strong>
                        <img src={website} alt="website_pic" className="picture"/>
                        <p>This website is the start of my web portfolio and the goal is to inform you about my interests, my experiences and the projects I am working on.
                            It was implemented with React and uses Echarts. It supports normal desktop and mobile devices.</p>
                        <Button target="_blank" variant="contained" id="githubButtons" href="https://github.com/bhalbritter/website">
                            <GitHubIcon ></GitHubIcon>Lern more
                        </Button>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className="oppositeContent" >
                        Work in progress
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector  className="connector" style={{backgroundColor: "#be3144"}} />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="Node" >
                        <strong>Satisfactory Builder</strong>
                        <img src={saCalc} alt="saCalc_pic" className="picture"/>
                        <p>The Satisfactory Builder is an online tool that can be used to plan Satisfactory's complex production chains.</p>
                        <p>It is implemented with React-Flow and the goal is to release a prototype soon.</p>
                        <Button target="_blank" variant="contained" id="githubButtons" href="https://github.com/bhalbritter/sacalculator">
                            <GitHubIcon ></GitHubIcon>Lern more
                        </Button>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className="oppositeContent" >
                        Wait for it...
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="Node" >
                        <strong>More is coming soon</strong>
                        <p>More Projects will follow in the future, the long term goal is to improve my skills this way and get used to certain technologies</p>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
    );
}
