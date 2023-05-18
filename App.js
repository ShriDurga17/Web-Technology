import React, {Component} from 'react';
class Controlled extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={value:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('successfully submited'+this.state.value);
        event.preventDefault();
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form</h1>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Roll Number:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Department:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default Controlled;