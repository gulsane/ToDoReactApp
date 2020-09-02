import {fontAwesomeIcon, FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React,{Component} from "react";
import AddToDoItem from "./AddToDoItem"


export default class ToDoList extends Component {
    state = {
        todos:[
            {Id:1,Title:"push my code to github",Status:"Done"},
            {Id:2,Title:"send email to senior manager", Status:"Pending"}
        ]
    }
    deleteToDo(todo){
        const filteredItem = this.state.todos.filter(x => x.Id!==todo.Id);
        this.setState({todos:filteredItem});
    }
    editTodo(todo){
        this.setState(state=>{
          return {todos:state.todos.map(x=>{
            if(x.Id===todo.Id){
                return {...x,Status:x.Status==="Done"?"Pending":"Done"}
            } else {
                return x;
            }
          })  
        }
    })
    }
    
    addToDo = (todo) => {
        this.setState({todos:[...this.state.todos,todo]});
    };

    render(){
        return (
            <div>
                <AddToDoItem onAdd={this.addToDo}></AddToDoItem>
                <h1>My To-Do-List</h1>
                <table className="table">
                   <thead>
                     <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td style={{color:x.Status==="Done"?"green":"red"}}>{x.Status}</td>
                              <td>
                                 <button className="btn btn-primary" onClick={()=>this.deleteToDo(x)}>
                                     <span>
                                         <FontAwesomeIcon icon = "trash"></FontAwesomeIcon>
                                     </span>
                                 </button>
                                 <button className="btn btn-primary" onClick={()=>this.editTodo(x)}>
                                     <span>
                                         <fontAwesomeIcon icon = "edit"></fontAwesomeIcon>
                                     </span>
                                 </button>
                              </td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
            </div>
        )
    }
}