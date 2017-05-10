import React from 'react';

export default class CalendarInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:''};
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
        var newItem={
                    'date':this.props.year.toString()+this.props.month.toString()+this.props.day.toString(),
                    'memo':this.state.text
                    }
        this.props.onSubmit(newItem);
        this.setState({text:''});
        // this.setState((prevState)=>({
        //     items:prevState.items.concat(newItem),
        //     text:''
        // }));
    }
}
