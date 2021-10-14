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
                label:'페업건수',
                borderWidth:1,
                data: list.data[1],
                backgroundColor:'rgb(75,192,192)'
            }
        ]
    };

    return(
       <div>
           <Bar data={data} options={options}></Bar>
       </div>
    );
}