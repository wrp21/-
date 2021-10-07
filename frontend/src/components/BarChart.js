import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart=()=>{
    
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
        labels:['치킨','피자','탕수육'],
        datasets:[
            {
                borderWidth:1,
                data:[1,2,3],
                backgroundColor:['yellow','red','green']
            }
        ]
    };

    return(
       <div style={{width:400}}>
           <Bar data={data} options={options} height={300}></Bar>
       </div>
    );
}