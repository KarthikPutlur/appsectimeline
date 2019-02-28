import React, {Component} from 'react';

import {Chart} from "react-google-charts";



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
            
            options={
              // Chart options
               {
                curveType:"none",
                lineWidth: 7, 
                backgroundColor: 'white',
                colors:["red","orange","yellow",""],

                annotations: {
                  textStyle: {
                  fontName: 'Times-Roman',
                  fontSize: 28,
                  
                }
                },
                tooltip:{
                  textstyle:{
                    
                    italic:true
                  }
                },
                hAxis: {
                  textStyle : {
                    fontSize: 27 
                }
                },
                vAxis: {textStyle : {
                  fontSize: 27 } },
                legend: {position:"top", alignment:'start', textStyle:{fontSize:20}}
              }
            }

            data={this.props.data}
            
          />
       }
      </div>
    );
  }
}

export default App2;