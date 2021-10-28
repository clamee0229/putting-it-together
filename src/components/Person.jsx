import React, { Component } from 'react';

class Person extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>hair color: {this.props.hair}</p>
            </div>
        )
    }
}

export default Person;