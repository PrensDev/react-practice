import React, { Component } from 'react'

class About extends Component {
    componentDidMount() {
        document.title = "About - Made by PrensDev"
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