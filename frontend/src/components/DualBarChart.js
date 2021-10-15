import React from 'react';
import { Bar } from 'react-chartjs-2';

export const DualBarChart=(props)=>{

    
    const list = props;
    
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
        labels: ['강남구','성북구','강동구','강서구','영통구'], //지역 인덱스
        datasets:[
            {
                label:'코로나이전 폐업건수',
                borderWidth:1,
                data: [1,2,3,4,5],
                backgroundColor:'blue'
            },{
                label:'코로나 이후 폐업건수',
                borderWidth:1,
                data: [5,4,3,4,5],
                backgroundColor:'yellow'
            }
        ]
    };

    return(
       <div style={{width:600,height:600}}>
           <Bar data={data} options={options}></Bar>
       </div>
    );
}