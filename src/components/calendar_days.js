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

        var prev_days = [], next_days = [];
        for (var ld=(last_day_of_last_month-firstday_of_week+1); ld<=last_day_of_last_month; ld++){
            prev_days.push(<div key={'ld_'+ld.toString()} className="section_day last_next_day">{ld}</div>);
        }

        var days=Array.apply(null, Array(lastday)).map(function (x, i) {
            return i+1;
        });

        for (var nd=1; nd<(7-lastday_of_week); nd++){
            next_days.push(<div key={'nd_'+nd.toString()} className="section_day last_next_day">{nd}</div>);
        }

        return (<div>
                {prev_days}
                {days.map((d)=>{
                    return (<div
                        key={d}
                        className={(this.props.year===this_year && this.props.month===this_month && d===this_day)?'section_day section_day_day today':'section_day section_day_day'}
                        onClick={()=>this.toggleInput(this.props.year, this.props.month, d)}>
                            <strong>{d}</strong>
                            <br />
                            <ul>{this.props.data_days.map((val)=>{
                                if(val.date===this.props.year.toString()+this.props.month.toString()+d.toString()){
                                    return <li>{val.memo}</li>;
                                }
                            })}</ul>
                    </div>);
                })}
                {next_days}
                </div>);
    }
}
