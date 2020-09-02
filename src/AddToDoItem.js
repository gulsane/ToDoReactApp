import React, { Component } from "react";
export default class AddTodo extends Component {
    state={
        Id:"",
        Title:"",
        Status:"Pending"
    }
    
    handleId = (event) => {
        this.setState({Id:event.target.value});
    };

    handleTitle = (event)=>{
        this.setState({Title:event.target.value});
    };

    handleStatus = (event) =>{
        this.setState({Status:event.target.value});
    };

    handleSubmition = (event) => {
        event.preventDefault();
        this.props.onAdd({
            Id:this.state.Id,
            Title:this.state.Title,
            Status:this.state.Status
        });
        this.setState({
            Id:"",
            Title:"",
            Status:"Pending"
        });
    }

    render() {
        return (
            <div>
                <h3>
                    Add ToDo
                </h3>
                <form onSubmit={(event)=>this.handleSubmition(event)}>
                    <div className="form-group" >
                        <input value={this.state.Id} className="form-control" placeholder="Enter Id" onChange={this.handleId} />
                    </div>
                    <div className="form-group" >
                        <input value={this.state.Title} className="form-control" placeholder="Enter Title" onChange={this.handleTitle} />
                    </div>
                    <div className="form-group">
                        <select value={this.state.Status} className="form-control" onChange={this.handleStatus} >
                            <option value="Done" >Done</option>
                            <option value="Pending" >Pending</option>
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add Todo</button>
                </form>
            </div>
        );
    }
}