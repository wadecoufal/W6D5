import React from 'react';

class Clock extends React.Component {
  constructor (props){
    super(props);
    this.state = { time: new Date ()};
    this.tick = this.tick.bind(this);
    this.timeString = this.timeString.bind(this);
    this.dateString = this.dateString.bind(this);
  }

  render (){
    return (
      <div className="clock-widget">
        <h1>Clock</h1>
        <div className="clock">
          <label>
            <div>Time: </div>
            <div>{this.timeString()}</div>
          </label>

          <label>
            <div>Date:</div>
            <div>{this.dateString()}</div>
          </label>
        </div>
      </div>
    );
  }

  timeString (){
    const { time } = this.state;
    return [time.getHours(), time.getMinutes(), time.getSeconds()].join(":");
  }

  dateString(){
    const { time } = this.state;
    return time.toString().split(' ').slice(0,4).join(' ');
  }

  tick () {
    this.setState({time: new Date()});
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default Clock;
