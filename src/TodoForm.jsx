import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.function_one(this.state.title)
        this.setState({
            title:''
        })
    }
    handleChange=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    search=(e)=>{
        this.props.search(e.target.value)
    }
    render(){
        return(
            <div className='todoform'>
                <form onSubmit={this.handleSubmit} >
                    <input  className='the_input' onChange={this.handleChange} value={this.state.title} /> <button className='btn btn-success'>Add</button>
                    <br />
                    <input  className='the_input' onChange={this.search} /> <button className='btn btn-primary'>SEARCH</button>
                </form>
            </div>
        )
    }
}

export default TodoForm