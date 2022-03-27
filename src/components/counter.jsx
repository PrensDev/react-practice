import React, { Component } from "react";

class Counter extends Component {

    // * Render
    
    render() {
        return (
            <tr>
                {/* Count */}
                <td>
                    <p className={ this.countClass() }>{ this.formatCount() }</p>
                </td>
                
                {/* Click Me Button */}
                <td>
                    <button 
                        onClick={ () => this.props.onIncrement(this.props.counter) } 
                        className="btn btn-primary btn-sm"
                    >Click Me!</button>
                </td>

                {/* Delete Button */}
                <td>
                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={ () => this.props.onDelete(this.props.counter.id) }
                    >Delete</button>
                </td>
            </tr>
        )
    }

    // * Helper Methods

    countClass() {
        let className = "text-";
        const { value } = this.props.counter;
        className += value === 0 ? "danger" : "primary";
        return className;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;