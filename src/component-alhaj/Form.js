import React, {Component} from "react";

class Form extends Component{

    constructor() {
        super();
        this.state={
            name:""
        }
    }

    onChangeListener=(event)=>{

        var newName=event.target.value
        this.setState({
            name:newName
        })

    }

    render() {
        return (
            <div>
            <form>
            </form>
                <p> My First Form</p>
                <p>{this.state.name}</p>
                <input onChange={this.onChangeListener} type="text" placeholder="your name"/>
                <input type="submit" value="Submit Now"/>
             </div>
            );
    }
}
export default Form;