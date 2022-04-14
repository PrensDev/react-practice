import React, { Component } from 'react'
import { DOCUMENT_EXTENSION } from '../constants';

class About extends Component {
    componentDidMount() {
        document.title = "About" + DOCUMENT_EXTENSION;
    }

    render() {
        return (
            <>
                <div className="vh-100">
                    <div>This is About page</div>
                </div>
            </>
        );
    }
}

export default About;