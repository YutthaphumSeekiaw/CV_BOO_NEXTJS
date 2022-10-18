import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaArrowCircleUp} from 'react-icons/fa';

// import { Timeline, Event } from "react-timeline-scribble";

function Skills() {
  return <div className='containner' id="experiences">
      <style jsx>{
          `
          .containner{
            max-width: 960px;
            margin: 0 auto;
        }
        .content-text{
            color: #fff;
            text-align: center;
            margin-top: 80px;
        }
        .content-con{
            display: grid;
            grid-template-columns:repeat(1,1fr);
        }
        p{
            color: #fff;
        }
        h3{
            color: #fff;
        }
        h4{
            color: #fff;
        }
        .css-692fgp{
            color: #fff;
        }

        
        @media screen and (max-width:480px) {

        }

          `
      }</style>
      <div className='content-text'>
          <h2>Experiences</h2>
      </div>
      <section className='content-con'>

     

        {/* <div className='p'>           <Timeline>
            <Event  interval={"May 2019 - present"} title={"<h3>Outsource at SCG</h3>"} subtitle={"Role: Developer"}>
            <p> Design database domain, Design Flow, Development new features, Fixed bug application and Maintain application, Build and deploy application, Work with Scrum </p>
            </Event>
            <Event interval={"May 2018 - May 2019"} title={"Outsource at PTT Digital"} subtitle={"Role: Developer"}>
            <p> Design database domain, Design Flow, Development new features, Fixed bug application and Maintain application, Build and deploy application, Work with Scrum </p>
            </Event>
            </Timeline>
        </div>
  */}


       <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="May 2019 - present"
            iconStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        >
            <h3 className="vertical-timeline-element-title">Outsource at SCG </h3>
            <h4 className="vertical-timeline-element-subtitle">Role: Developer</h4>
            <p>
             •	Design database and design flow 
            <br></br> •	Development new feature font-end, back-end and job schedule
            <br></br> •	Fixed bug and maintain application
            <br></br> •	Config github action CI/CD automate deploy to Azure
            <br></br> •	Config server and build and deploy application to IIS and Azure
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="May 2018 - May 2019"
            iconStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        >
            <h3 className="vertical-timeline-element-title">Outsource at PTT Digital</h3>
            <h4 className="vertical-timeline-element-subtitle">Role: Developer</h4>
            <p>
             •	Design database and design flow 
            <br></br> •	Development new feature font-end, back-end and job schedule
            <br></br> •	Fixed bug and maintain application
            <br></br> •	Config server and build and deploy application to IIS
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="January 2018 - May 2018"
            iconStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        >
            <h3 className="vertical-timeline-element-title">Outsource at AYCAP Of Krungsri Bank</h3>
            <h4 className="vertical-timeline-element-subtitle">Role: Developer</h4>
            <p>
             •	Design database and design flow 
            <br></br> •	Development new feature font-end, back-end and job schedule
            <br></br> •	Fixed bug and maintain application
            <br></br> •	Config server and build and deploy application to IIS
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="December 2016 - December 2017"
            iconStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        >
            <h3 className="vertical-timeline-element-title">Outsource at Chanwanich co,.ltd</h3>
            <h4 className="vertical-timeline-element-subtitle">Role: Developer</h4>
            <p>
             •	Design database and design flow 
            <br></br> •	Development new feature font-end, back-end and job schedule
            <br></br> •	Fixed bug and maintain application
            <br></br> •	Config server and build and deploy application to IIS
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="January 2014 - November 2016"
            iconStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        >
            <h3 className="vertical-timeline-element-title">Outsource at AIG</h3>
            <h4 className="vertical-timeline-element-subtitle">Role: Developer</h4>
            <p>
             •	Development new feature font-end, back-end and job schedule
            <br></br> •	Fixed bug and maintain application
            <br></br> •	Config server and build and deploy application to IIS
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="November 2013 – December 2014"
            iconStyle={{ background: 'rgb(8,5,31)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        >
            <h3 className="vertical-timeline-element-title">Bangkok Medical Software</h3>
            <h4 className="vertical-timeline-element-subtitle">Role: Programmer</h4>
            <p>
             •	Get requiment by user
            <br></br> •	Design database and design flow 
            <br></br> •	Development new feature font-end and back-end
            <br></br> •	Fixed bug and maintain application
            <br></br> •	Config server and build and deploy application to IIS
            <br></br> •	Maintain system in site
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline> 
        
      </section>
  </div>;
}

export default Skills;
