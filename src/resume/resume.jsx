import React, { Component } from 'react';
import BasicInfo from './components/basicInfo';
import Summary from './components/summary';
import Experiences from './components/experiences';
import Education from './components/education';
import Licenses from './components/licenses';
import Skills from './components/skills';
import Awards from './components/awards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Resume extends Component {
    state = { 
        applicant: {
            first_name: "Jetsun Prince",
            middle_name: "P.",
            last_name: "Torres"
        },
        summary: "Hello World! I am Jetsun Prince Torres. I am an aspirant Filipino Web Developer, Designer, and Programmer.",
        experiences: [],
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
            }
        ],
        awards: [

        ]
    }

    render() { 
        return (
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
                                <Licenses />
                                <hr className="my-4" />
                                <Skills skills={ this.state.skills }/>
                                <hr className="my-4" />
                                <Awards />
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
        );
    }
}

export default Resume;