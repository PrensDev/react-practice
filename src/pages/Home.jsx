import React, { Component } from 'react';
import { DOCUMENT_EXTENSION } from '../constants';

class Home extends Component {
    componentDidMount() {
        document.title = "Home" + DOCUMENT_EXTENSION; 
    }

    render() { 
        return (
            <>
                <div className="vh-100">
                    <div>This is Home page</div>
                </div>
            </>
        );
    }
}

export default Home;