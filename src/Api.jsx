import React from 'react';

const style={
    textAlign: 'center'
}

const head = {
    padding: '20px'
}

class Api extends React.Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((the_data)=>{
            this.setState({data: the_data})
        })
    }
    render(){
        return(
            <div style={style}>
                <h4 style={head}>From Jsonplaceholder</h4>
                <p>This grabs data from "https://jsonplaceholder.typicode.com/guide.html". <br />Serves no purpose other than to show this app has Fetch Api capabilities</p>
                <hr />
                {this.state.data.map((a)=>{
                    return <p key={Math.random()}>{a.title}</p>
                })}
            </div>
        )
    }
}

export default Api