import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import $ from 'jquery';
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

class Summary extends Component {

    getSummary = () => {
        const { summary } = this.props || false;
        return summary 
            ? <div className="my-3">{ summary }</div>
            : <div className="text-center small text-secondary fst-italic p-3">This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.</div>
    }

    editSummary = () => {
        var modal = new bootstrapBundleMin.Modal($('#updateSummary-Modal'));
        modal.show();
    }

    render() { 
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Summary</h5>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary" onClick={ this.editSummary }>
                            <FontAwesomeIcon icon={ solid('edit') } />
                        </button>
                    </div>
                </div>

                { this.getSummary() }
            </>
        );
    }
}

export default Summary;