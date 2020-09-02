import React, { Component } from 'react';
import Child from "./child";
import Demo1 from "./demo1"

export default class Parent extends Component{
    render(){
        return (
            <div>
                <h3>
                I am Parent component and name passed to me is {this.props.NameOfStudent}
                </h3>
            <Child text="Text form parent component for child"></Child>
            <Demo1 text="text from parent component for demo1"></Demo1>
            </div>
        )
    }
}