import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaArrowCircleUp} from 'react-icons/fa';

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
      
        
        @media screen and (max-width:480px) {

        }

          `
      }</style>
      <div className='content-text'>
          <h2>Experiences</h2>
      </div>
      <section className='content-con'>

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
            Design database domain, Design Flow, Development new features, Fixed bug application and Maintain application, Build and deploy application, Work with Scrum 
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
            Design database domain, Design Flow, Development new features, Fixed bug application and Maintain application, Build and deploy application, Work with Scrum 
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
             Development new features, Fixed bug application and Maintain application, Build and deploy application, Work with Scrum 
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
             Development new features, Fixed bug application and Maintain application, Build and deploy application, Work with Scrum 
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
             Development new features, Fixed bug application and Maintain application, Build and deploy application 
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
             Development new features, Fixed bug application and Maintain application, Build and deploy application, Maintain Systems 
            </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaArrowCircleUp />}
        /> */}
        </VerticalTimeline>
        
      </section>
  </div>;
}

export default Skills;
