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
    render() { 

        const { resumeData, modalStates, hideModal, updateApplicantInfo } = this.props;
        return (
            <>
                <BasicInfoModal 
                    data={ resumeData.applicant }
                    modalState={ modalStates.basicInfo } 
                    hideModal={ modalstate => hideModal(modalstate) }
                    updateApplicantInfo={ applicant => updateApplicantInfo(applicant) }
                />
                <SummaryModal 
                    modalState={ modalStates.showSummaryModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
                <ExperiencesModal 
                    modalState={ modalStates.showExperienceModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
                <EducationModal 
                    modalState={ modalStates.showEducationModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
                <LicensesModal 
                    modalState={ modalStates.showLicensesModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
                <SkillsModal 
                    modalState={ modalStates.showSkillsModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
                <AwardsModal 
                    modalState={ modalStates.showAwardsModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
                <ConfirmationModal 
                    modalState={ modalStates.showConfirmationModal } 
                    hideModal={ modalstate => hideModal(modalstate) }
                />
            </>
        );
    }
}

export default Modals;