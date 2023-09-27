import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
    super(props)
    this.state={
        username:" ",
        comments:" "
    }
    }
    handleUsername=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleComments=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    render(){ 
        return (
           <div>
             <h1>
                hello
            </h1>
            <p>
                world
            </p> 
           </div>
        );
    }
}
 
export default Form;