import React from 'react';

export default class CalendarInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {items:[], text:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    render(){
        return (<div id="calendar-input" className="display-hidden">
            <p>{this.props.year}/{this.props.month}/{this.props.day}</p>
            <form onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange} value={this.state.text}></textarea>
                <button>Add</button>
            </form>
        </div>);
    }

    handleChange(e){
        this.setState({text:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        var newItem={text:this.state.text};
        this.setState((prevState)=>({
            items:prevState.items.concat(newItem),
            text:''
        }));
    }
}
