import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {
                id: 1,
                value: 0
            }, {
                id: 2,
                value: 5
            }, {
                id: 3,
                value: 10
            }, 
            
        ]
    }

    render() {
        return (
            <div className="container py-3">

                {/* Reset Button */}
                <div className="mb-3">
                    <button 
                        className="btn btn-warning"
                        onClick={this.handleReset }
                    >Reset</button>
                </div>

                {/* Table */}
                <table className="table table-bordered">
                    <div className="tbody">
                        { this.renderCounters() }
                    </div>
                </table>
            </div>
        );
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        console.log(this.state.counters[index])
        this.setState({ counters })
    }
    
    renderCounters() {
        return this.state.counters.map(counter => 
            <Counter 
                key={ counter.id } 
                counter={ counter }
                onIncrement={ this.handleIncrement }
                onDelete={ this.handleDelete }
            />
        ) 
    }

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters })
    }
}

export default Counters;