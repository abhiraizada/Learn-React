import React, { Component } from 'react';
import './App.css';
import CharComponent from './components/CharComponent';
//import Useroutput from './components/Useroutput';
import Userinput from './components/Userinput'
import Validationlen from './components/Validationlen';

class App2 extends Component{
    state = {
        name : ""
    }

    changeInputHandler =(event) =>{
        this.setState({
          ...this.state, name: event.target.value
        })
    }
    deleteHandler =(index) =>{
        let text = this.state.name.split('')
        text.splice( index, 1)
        let updatedText =  text.join('')
        this.setState({
            ...this.state, name: updatedText
        })
        console.log(this.state.name)
    }

    render(){
        return(
            <div>
            <Userinput name={this.state.name} change={this.changeInputHandler} />
            <Validationlen name={this.state.name}/>
            {
                this.state.name.split('').map( (character, index) =>{
                    return <CharComponent key={index} clicked={() => this.deleteHandler(index)} data={character} />
                })
            }
            </div>
        )
    }
}

export default App2;