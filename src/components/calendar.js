import React from 'react';
import CalendarTitle from './calendar_title';
import CalendarDays from './calendar_days';
import CalendarControl from './calendar_control';
import CalendarInput from './calendar_input';

export default class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state = {input_y:'', input_m:'', input_d:''};
    }

    componentWillMount(){
        var today=new Date();
        var year=today.getFullYear();
        var month=today.getMonth()+1;

        this.state = {year:year, month:month, data_days:[]};
    }

    changeDate(year, month){
        this.setState({
            year:year,
        	month:month
        });
    }

    showInput(input_y, input_m, input_d){
        this.setState({
            input_y:input_y,
            input_m:input_m,
            input_d:input_d
        });
        document.getElementById('calendar-input').className='display-block';
    }

    addNewMemo(newItem){
        this.setState((prevState)=>({
            data_days:prevState.data_days.concat(newItem),
        }));
        document.getElementById('calendar-input').className='display-hidden';
    }

    render(){
        return(<div>
    	        <h2>Calendar</h2>
                <h3>{this.state.year} / {this.state.month}</h3>
            	<CalendarControl onChange={this.changeDate.bind(this)} year={this.state.year} month={this.state.month} />
            	<CalendarTitle />
            	<CalendarDays year={this.state.year} month={this.state.month} data_days={this.state.data_days} onClick={this.showInput.bind(this)} />
                <CalendarInput year={this.state.input_y} month={this.state.input_m} day={this.state.input_d} onSubmit={this.addNewMemo.bind(this)} />
            </div>);
    }
}
