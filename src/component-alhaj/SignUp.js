import React,{Component} from "react";

class SignUp extends Component{

    constructor() {
        super();
        this.state={
            fName:"",
            lName:"",
            userName:"",
            password:""
        }
    }

    onChangeEvent=(event)=>{
        var inputeName=event.target.name
        var inputeValue=event.target.value

        this.setState({
        [inputeName]:inputeValue
        })

    }

    render() {
        return(
            <div>

                <p>First name: {this.state.fName}</p>
                <p>Last name: {this.state.lName}</p>
                <p>User name: {this.state.userName}</p>
                <p>password: {this.state.password}</p>

                <form>
                    <input onChange={this.onChangeEvent} name={"fName"} type={"text"} placeholder={"your"}/><br/>
                    <br/>
                    <input onChange={this.onChangeEvent} name={"lName"} type={"text"} placeholder={"your"}/><br/>
                    <input onChange={this.onChangeEvent} name={"userName"} type={"text"} placeholder={"your"}/><br/>
                    <input onChange={this.onChangeEvent} name={"password"} type={"text"} placeholder={"your"}/>
                </form>
            </div>
        );
    }


}

export default SignUp;