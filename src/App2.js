import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Chart} from "react-google-charts";


{/* const data = [
  ["Element", "Density", { role: "style" }],
  ["Critical", 21, "red"], // RGB value
  ["High", 74, "orange"], // English color name
  ["Medium", 155, "yellow"],
   // CSS-style declaration
]; */}

class App2  extends Component {
  render() {
    return (
      <div className="App2 ">
       
       {
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            backgroundColor= "#111111"
            opacity="0.9"
            
            data={this.props.data}
          />
       }
      </div>
    );
  }
}

export default App2;