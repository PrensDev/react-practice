import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        document.title = "Home - Made by PrensDev"
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