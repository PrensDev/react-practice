import React, { Component } from 'react'

class Summary extends Component {

    getSummary = () => {
        const { summary } = this.props;
        return summary 
            ? (
                <p>{ summary }</p>
            ) 
            : (
                <div className="text-center small text-secondary fst-italic p-3">This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.</div>
            )
    }

    render() { 
        return (
            <>
                <h5>Summary</h5>
                { this.getSummary() }
            </>
        );
    }
}

export default Summary;