import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      deg: this.getDegFromHours_(new Date().getHours()),
      x: 0,
      y: 0,
      step: 'HOURS',
      currentTime: new Date(),
    };
    this.angles_ = [];
    for (let angle = 0; angle < 360; angle += 30) {
      this.angles_.push(angle);
    }
  }
  componentDidMount() {
    const {x,y} = this.svg.getBoundingClientRect();
    this.setState({
      x,y
    });
  }
  toRadians_(angle) {
    return angle * (Math.PI / 180);
  }
  toDegree_(radians) {
    return radians * 180 / Math.PI;
  };
  handleDrag_ = (e) => {
    const x2 = e.touches[0].clientX - this.state.x;
    const y2 = e.touches[0].clientY - this.state.y;
    const	dx = 200 - x2, dy = 200 - y2;
    let deg = (Math.atan2(dy, dx) * 180 / Math.PI ) + 180;
    switch (this.state.step) {
      case "HOURS":
        deg = Math.round(deg/30) * 30;
        if (deg % 30 === 0) {
          this.setState({
            deg
          });
        }
      break;
      case "MINUTES":
      deg = Math.round(deg/6) * 6;
        if (deg % 6 === 0) {
          this.setState({
            deg,
          });
        }
      break;
    }
  }
  handleEnd_ = (e) => {
    switch (this.state.step) {
      case "HOURS":
        const hours = (Math.round(this.state.deg) / 30) + 3;
        if (this.props.onHoursSelect) {
          this.props.onHoursSelect(hours);
        }
        this.setState({
          step: "MINUTES",
          deg: this.getDegFromMinutes_(this.state.currentTime.getMinutes())
        });
      break;
      case "MINUTES":
        const minutes = (Math.round(this.state.deg) / 30) + 3;
        if (this.props.onMinutesSelect) {
          this.props.onMinutesSelect(minutes);
        }
      break;
    }
  }
  getDegFromHours_(hours) {
    return (hours - 3) * 30;
  }
  getDegFromMinutes_(minutes) {
    return (minutes - 15) * 6;
  }
  showHours() {
    this.setState({
      step: 'HOURS'
    });
  }
  showMinutes() {
    this.setState({
      step: 'MINUTES'
    });
  }
  render(props) {
    return (
      <svg class="dial minues" width="400" height="400" viewBox="0 0 400 400"
        onTouchMove={this.handleDrag_}
        onTouchEnd={this.handleEnd_}
        ref={svg => this.svg = svg}>
        <style>
        {`
          :root{
            fill: transparent;
            stroke: #000
          }
          text {
            fill: #000;
            font-family: helvetica;
            alignment-baseline: central;
            text-anchor: middle;
          }
          .arm {
            fill: #0091EA;
            transform-origin: center center;
            transition-property: transform;
            transition-duration: 400ms;
          }
          .display {
            user-input: none;
          }
          .minutes, .hours {
            transition-property: opacity, transform;
            transition-duration: 300ms;
            transform-origin: center;
          }
          .display.HOURS .minutes{
            opacity: 0;
            transform: scale(0.7);
          }
          .display.MINUTES .hours{
            opacity: 0;
            transform: scale(0.7);
          }
        `}
        </style>
        <circle cx="200" cy="200" r="190" />
        <g class={`display ${this.state.step}`}>
          <g class="arm" style={`transform: rotate(${this.state.deg}deg)`}>
            <rect width="145" height="2" x="199" y="199" stroke-width="0"></rect>
            <circle cx="200" cy="200" r="5" stroke-width="0"></circle>
            <circle cx="360" cy="200" r="20" stroke-width="0"></circle>
          </g>
          <g class="hours">
            {
              this.angles_.map((angle, index) => {
                return (<text x={Math.round(160 * Math.cos(this.toRadians_(angle))) + 200} y={Math.round(160 * Math.sin(this.toRadians_(angle))) + 200} class="digit">{(index + 3) % 12 || 12}</text>);
              })
            }
          </g>
          <g class="minutes">
            {
              this.angles_.map((angle, index) => {
                return (<text x={Math.round(160 * Math.cos(this.toRadians_(angle))) + 200} y={Math.round(160 * Math.sin(this.toRadians_(angle))) + 200} class="digit">{((index + 3) % 12 || 12) * 5}</text>);
              })
            }
          </g>
        </g>
      </svg>
    );
  }
}
