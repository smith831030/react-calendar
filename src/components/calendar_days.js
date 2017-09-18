import React from 'react';

export default class CalendarDays extends React.Component{
    toggleInput(year, month, day){
        this.props.onClick(year, month, day);
    }

    render(){
        var today=new Date();
        var this_year=today.getFullYear();
        var this_month=today.getMonth()+1;
        var this_day=today.getDate();

        var last_month = new Date(this.props.year, this.props.month-1, 0, 0, 0, 0, 0);
        var last_day_of_last_month = last_month.getDate();

        var first_date = new Date(this.props.year, this.props.month-1, 1, 0, 0, 0, 0);
        var firstday_of_week = first_date.getDay();

        var last_date = new Date(this.props.year, this.props.month, 0, 0, 0, 0, 0);
        var lastday = last_date.getDate();
        var lastday_of_week = last_date.getDay();

        var prev_days = Array.from({length:firstday_of_week}, (v,k) => last_day_of_last_month - firstday_of_week + k + 1);
        var next_days = Array.from({length:6-lastday_of_week}, (v,k) => k+1);
        var days = Array.from({length:lastday}, (v,k) => k+1);

        return (<div>
                {prev_days.map((ld)=>{
                    return <div key={ld} className="section_day last_next_day">{ld}</div>;
                })}
                {days.map((d)=>{
                    var today=(this.props.year===this_year && this.props.month===this_month && d===this_day)?'today':'';
                    return (<div
                        key={d}
                        className={'section_day section_day_day '+today}
                        onClick={()=>this.toggleInput(this.props.year, this.props.month, d)}>
                            <strong>{d}</strong>
                            <br />
                            <ul>{this.props.data_days.map((val, key)=>{
                                if(val.date===this.props.year.toString()+this.props.month.toString()+d.toString()){
                                    return <li key={key}>{val.memo}</li>;
                                }
                            })}</ul>
                    </div>);
                })}
                {next_days.map((nd)=>{
                    return <div key={nd} className="section_day last_next_day">{nd}</div>;
                })}
                </div>);
    }
}
