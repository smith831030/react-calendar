import React from 'react';

export default class CalendarTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {'arr_w':['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT']};
    }

    render(){
        var weeks=this.state.arr_w.map(function(v, k){
          return(<div key={k} className="section_day section_day_title">
              <span>{v}</span>
            </div>);
        });
        return (<div>{weeks}</div>);
    }
}
