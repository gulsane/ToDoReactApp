import React, { Component } from 'react';

export default class Child extends Component{
    render(){
        return (
            <div>
                <h3>
                I am child component
                </h3>
                <h4>
                {this.props.text}
                </h4>
            </div>
        )
    }
}