import React, { Component } from 'react';

import BasicInfo_Modal from './basicInfo_modal';
import Summary_Modal from './summary_modal';
import Experiences_Modal from './experiences_modal';
import Education_Modal from './education_modal';

class Modals extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <BasicInfo_Modal />
                <Summary_Modal />
                <Experiences_Modal />
                <Education_Modal />
            </>
        );
    }
}

export default Modals;