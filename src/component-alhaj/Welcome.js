import React,{Component} from 'react'

class Welcome extends Component{

    btnClick(a){
        alert(a)
    }

    render(){
        return <div>
            <button onClick={this.btnClick.bind(this,"value")}> Click me</button>
            <h1>hello class{this.props.name}</h1>;
        </div>


    }

}

export default Welcome