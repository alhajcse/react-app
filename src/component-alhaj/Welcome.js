import React,{Component} from 'react'
import Button from "@material-ui/core/Button";

class Welcome extends Component{

    btnClick(a){
        alert(a)
    }

    render(){
        return <div>
            <button onClick={this.btnClick.bind(this,"value")}> Click me</button>

            <Button variant="contained" color="primary">
                Primary
            </Button>

            <h1>hello class{this.props.name}</h1>;
        </div>


    }

}

export default Welcome