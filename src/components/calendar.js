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

        this.state = {year:year, month:month, data_days:[{'date':'201759', 'memo':'test'}, {'date':'2017520', 'memo':'test3'}]};
    }

    changeDate(year, month){
        this.setState({
            year:year,
        	month:month
        });
    }

    toggleInput(input_y, input_m, input_d){
        this.setState({
            input_y:input_y,
            input_m:input_m,
            input_d:input_d
        });
        var newClass=(document.getElementById('calendar-input').className==='display-block')?'display-hidden':'display-block';
        document.getElementById('calendar-input').className=newClass;
    }

    render(){
        return(<div>
    	        <h2>Calendar</h2>
                <h3>{this.state.year} / {this.state.month}</h3>
            	<CalendarControl onChange={this.changeDate.bind(this)} year={this.state.year} month={this.state.month} />
            	<CalendarTitle />
            	<CalendarDays year={this.state.year} month={this.state.month} data_days={this.state.data_days} onClick={this.toggleInput.bind(this)} />
                <CalendarInput year={this.state.input_y} month={this.state.input_m} day={this.state.input_d} />
            </div>);
    }
}
