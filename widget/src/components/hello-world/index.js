import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {
  constructor() {
    super();
    this.angles_ = [];
    for (let angle = 0; angle < 360; angle+= 30) {
      this.angles_.push(angle);
    }
  }
  toRadians_(angle) {
    return angle * (Math.PI / 180);
  }
  render(props) {
    return (
      <div>
         <svg class="dial minues" width="400" height="400" viewBox="0 0 400 400">
          <style>
            {`:root{
              fill: transparent;
              stroke: #000
            }
            text {
              fill: #000;
              font-family: helvetica;
            }
            .hours{
              display: none;
            }`}
          </style>
          <circle cx="200" cy="200" r="190"/>
          <g class="hours">
            {
              this.angles_.map((angle, index)=> {
                return (<text x={160*Math.cos(this.toRadians_(angle)) + 200} y={160*Math.sin(this.toRadians_(angle)) + 200} class="digit" text-anchor="middle">{(index + 3) % 12 || 12}</text>);
              })
            }
          </g>
          <g class="minutes">
            {
              this.angles_.map((angle, index)=> {
                return (<text x={160*Math.cos(this.toRadians_(angle)) + 200} y={160*Math.sin(this.toRadians_(angle)) + 200} class="digit" text-anchor="middle">{((index + 3) % 12 || 12) * 5}</text>);
              })
            }
          </g>
        </svg>
      </div>
    );
  }
}
