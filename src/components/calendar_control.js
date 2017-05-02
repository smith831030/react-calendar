import React from 'react';

export default class CalendarControl extends React.Component{
    constructor(props){
        super(props);
    }

    Prev(){
        var year=this.props.year;
        var month=this.props.month;
        var prev_year, prev_month;
        if(month==1){
          prev_year=year-1;
          prev_month=12;
        }else{
          prev_year=year;
          prev_month=month-1;
        }

        this.props.onChange(prev_year, prev_month);
    }

    Next(){
        var year=this.props.year;
        var month=this.props.month;
        var prev_year, prev_month;
        if(month==12){
          prev_year=year+1;
          prev_month=1;
        }else{
          prev_year=year;
          prev_month=month+1;
        }

        this.props.onChange(prev_year, prev_month);
    }

    Today(){
        var today=new Date();
        var year=today.getFullYear();
        var month=today.getMonth()+1;

        this.props.onChange(year, month);
    }

    render(){
        return (<div>
            <button onClick={this.Prev.bind(this)}>&lt;</button>
            <button onClick={this.Today.bind(this)}>Today</button>
          	<button onClick={this.Next.bind(this)}>&gt;</button>
          </div>);
    }
}
