import React from 'react'
import axios from 'axios'
import DisplayForm from './DisplayForm'

class InsertForm extends React.Component{
    constructor(){
        super()
        this.state = {rollno: "", name: "", cl: ""}
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        // e.preventDefault()
        let data = this.state   
        axios.post("http://127.0.0.1:5000/insert",data).then(res => console.log("result inserted"))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Rollno: </label>
                    <input type='text' onChange={this.handleChange} name='rollno'/>
                    <label>Enter Name: </label>
                    <input type='text' onChange={this.handleChange} name='name'/>
                    <label>Enter Class: </label>
                    <input type='text' onChange={this.handleChange} name='cl'/>
                    <button type='submit'>Submit</button>
                </form>
                <DisplayForm />
            </div>
        )
    }
}

export default InsertForm
