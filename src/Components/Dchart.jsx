import React from "react";
import { Doughnut } from 'react-chartjs-2';

function Dchart() {
  return (
    <div className="Dchart">
        <Doughnut>
        data = {{
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
     }]
        }}
        height={400}
        width={600}
        </Doughnut>
    </div>
  );
}

export default Dchart;