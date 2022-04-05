import React, { Component } from 'react';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Resume Components
import BasicInfo from './components/basicInfo';
import Summary from './components/summary';
import Experiences from './components/experiences';
import Education from './components/education';
import Licenses from './components/licenses';
import Skills from './components/skills';
import Awards from './components/awards';

import Modals from './modals/modals';


class Resume extends Component {
    state = { 
        applicant: {
            first_name: "Jetsun Prince",
            middle_name: "P.",
            last_name: "Torres",
            email: "jetsunprincetorres@sample.com",
            contact_number: "09123456789",
            links: [
                {
                    id: 1,
                    link: "https://www.linkedin.com/in/jetsunprince/",
                    name: "LinkedIn"
                }, {
                    id: 2,
                    link: "https://github.com/PrensDev",
                    name: "Github"
                }
            ]
        },
        summary: "Hello World! I am Jetsun Prince Torres. I am an aspirant Filipino Full Stack Developer, Web Designer, and Programmer. I build innovative, integrative, and modern technologies that provide solutions for real-world problems. Became a team leader and cooperative team member that successfully organize tasks, was time-efficient, productive, successfully achieve objectives on time, and sometimes produce higher quality results than expected.",
        experiences: [
            {
                id: 1,
                title: "Web Developer",
                company: "Tesla Company"
            }, {
                id: 2,
                title: "Software Qualify Assurance/Tester",
                company: "Tesla Company"
            }
        ],
        education: [
            {
                id: 1,
                school: "Bignay National High School",
            }, {
                id: 2,
                school: "Our Lady of Fatima University",
                degree: "High School Graduate"
            }, {
                id: 3,
                school: "Polytechnic University of the Philippines",
                degree: "Bachelor of Science in Information Technology"
            }
        ],
        licenses: [
            {
                id: 1,
                name: "Cisco Certified Network Associate Security"
            }, {
                id: 2,
                name: "Cisco Certified Network Associate Security"
            }
        ],
        skills: [
            {
                id: 1,
                name: 'Web Development'
            }, {
                id: 2, 
                name: 'UI/UX Designer'
            }, {
                id: 3,
                name: 'Programmer'
            }, {
                id: 4,
                name: 'Quality Assurance/Tester'
            }, {
                id: 5,
                name: 'Database Administrator'
            }
        ],
        awards: [
            {
                id: 1,
                name: "Cum Laude"
            }
        ]
    }

    componentDidMount() {
        alert("Test")
    }

    render() { 
        return (
            <> 
                {/* Resume Component */}
                <div className="bg-light py-3">
                    <div className="container-lg">
                        <div className="row justify-content-center">
                            <div className="col-md-10">

                                {/* Resume Document */}
                                <div className="p-5 bg-white shadow-sm rounded">
                                    <BasicInfo applicant={ this.state.applicant } />
                                    <hr className="my-4" />
                                    <Summary summary={ this.state.summary }/>
                                    <hr className="my-4" />
                                    <Experiences experiences={ this.state.experiences } />
                                    <hr className="my-4" />
                                    <Education education={ this.state.education } />
                                    <hr className="my-4" />
                                    <Licenses licenses={ this.state.licenses }/>
                                    <hr className="my-4" />
                                    <Skills skills={ this.state.skills }/>
                                    <hr className="my-4" />
                                    <Awards awards={ this.state.awards } />
                                </div>

                                {/* Action Buttons */}
                                <div className="text-center mt-3">
                                    <button className="btn btn-danger">
                                        <FontAwesomeIcon icon={ solid('sync-alt') } fixedWidth />
                                        <span>Reset</span>
                                    </button>
                                    <span className="mx-2"></span>
                                    <button className="btn btn-primary">
                                        <span>Submit</span>
                                        <FontAwesomeIcon icon={ solid('check') } fixedWidth />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Resume Modals */}
                <Modals />
            </>
        );
    }
}

export default Resume;