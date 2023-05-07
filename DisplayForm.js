import React from 'react'
import axios from 'axios'
class DisplayForm extends React.Component{
    constructor(){
        super()
        this.state = {records:[]}
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:5000/display").then(res=>this.setState({records: res.data})).catch(err=>console.log(err))
    }

    render(){
        let trs = (this.state.records.length === 0?<tr></tr>:this.state.records.map((e)=><tr>
            <td>{e.rollno}</td>
            <td>{e.name}</td>
            <td>{e.cl}</td>
        </tr>))

        return(
            <div>
                <table border="2">
                    <thead>
                    <tr>
                    <th>RollNo</th>
                    <th>Name</th>
                    <th>Class</th>
                    </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayForm