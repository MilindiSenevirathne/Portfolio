import React from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MCP from '../../Assets/mcp.png'
import SS from '../../Assets/ss.png'
import UOM from '../../Assets/uom.png'
import AGR from '../../Assets/agr.png'
import DEV from '../../Assets/dev.png'

function Home3() {

    const style = {
        contentStyle: {
            background: "#fff", color: '#142429', borderWidth: 1, borderColor: "#fff", borderRadius: 20
        },
        contentArrowStyle: {
            borderRight: '7px solid  rgb(255, 255, 255)'
        },
        iconStyle: {
            background: 'rgb(13, 26, 29)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        },
        h3: {
            color: "#20c5acd7", fontWeight: 'bolder'
        },
        h4: {
            fontSize: 18, fontWeight: 'bold'
        }
    }

    const details = [
        {
            id: 1,
            title: 'G.C.E. O/L',
            subtitle: 'Mahanama College, Panadura - 2015',
            details: '8 A"s, 1 B',
            icon: MCP
        },
        {
            id: 2,
            title: 'G.C.E. A/L',
            subtitle: 'Sumangala Balika Maha Vidyalaya - 2018',
            details: '2 A"s, 1 C - Bio Stream',
            details2: 'Z-Score - 1.6534',
            icon: SS
        },
        {
            id: 3,
            title: 'Bsc. (Hons) in Information Technology',
            subtitle: 'University of Moratuwa (2020 - 2024)',
            details: 'CGPA - 3.67',
            icon: UOM
        },
        {
            id: 4,
            title: 'Software Engineer Intern',
            subtitle: 'Agrithmics (Pvt) Ltd (Dec 2022 - June 2023)',
            details: 'React Native, Android',
            icon: AGR
        },
        {
            id: 5,
            title: 'Technical Lead',
            subtitle: 'DevLabs (From August 2023)',
            details: 'UI/UX',
            icon: DEV
        }
    ]

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <h1 style={{ fontSize: "2.6em" }} className="home-about-description">
                    My <span className="purple"> Journey </span>
                </h1>
                <VerticalTimeline>
                    {details?.map((item) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={style.contentStyle}
                                contentArrowStyle={style.contentArrowStyle}
                                date="2011 - present"
                                iconStyle={style.iconStyle}
                                icon={<img src={item.icon} alt="Custom Icon" style={{ width: '80%', height: 'auto' }} />}
                            >
                                <div style={{ textAlign: 'left' }}>
                                    <h3 style={style.h3}>{item.title}</h3>
                                    <h4 style={style.h4}>{item.subtitle}</h4>
                                    <p>
                                        {item.details}
                                    </p>
                                    {item.details2 && (
                                        <p>
                                            {item.details2}
                                        </p>
                                    )}
                                </div>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </Container>
        </Container>
    );
}
export default Home3;
