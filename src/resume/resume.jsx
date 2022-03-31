import React, { Component } from 'react';
import BasicInfo from './components/basicInfo';
import Summary from './components/summary';
import Experiences from './components/experiences';
import Education from './components/education';
import Licenses from './components/licenses';
import Skills from './components/skills';
import Honors from './components/honors';

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
                school: "Bignay National High School"
            }, {
                id: 2,
                school: "Our Lady of Fatima University"
            }, {
                id: 3,
                school: "Polytechnic University of the Philippines"
            }
        ],
    }

    render() { 
        return (
            <div className="bg-light py-3">
                <div className="container">
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
                                <Skills />
                                <hr className="my-4" />
                                <Honors />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;