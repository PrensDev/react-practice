import React, { Component } from 'react';

import BasicInfoModal from './basicInfo_modal';
import SummaryModal from './summary_modal';
import ExperiencesModal from './experiences_modal';
import EducationModal from './education_modal';
import LicensesModal from './licenses_modal';
import SkillsModal from './skills_modal';
import AwardsModal from './awards_modal';
import ConfirmationModal from './confirmation_modal';

class Modals extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <BasicInfoModal />
                <SummaryModal />
                <ExperiencesModal />
                <EducationModal />
                <LicensesModal />
                <SkillsModal />
                <AwardsModal />
                <ConfirmationModal />
            </>
        );
    }
}

export default Modals;