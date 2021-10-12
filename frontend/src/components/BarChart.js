import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart=(props)=>{

    
    const list = props;

    console.log(list.data[0]);
    console.log(list.data[1]);
    
    
    const options = {
        legend:{
            display:false,
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:0,
                    stepSize:1,
                }
            }]
        },
        maintainAspecRatio:false
    }
    const data = {
        labels: list.data[0],
        datasets:[
            {
                borderWidth:1,
                data: list.data[1]
            }
        ]
    };

    return(
       <div style={{width:400}}>
           <Bar data={data} options={options} height={300}></Bar>
       </div>
    );
}