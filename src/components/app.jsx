import React from "react";
import LoginForm from "./login-form";

class App extends React.Component {
    render(){
        return  <LoginForm/>
    }
    componentDidMount(){
        console.log("component mounted");
    }
}

export default App;