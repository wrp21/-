import React from 'react';
import { Bar } from 'react-chartjs-2';

export const DualBarChart=(props)=>{

    
    const list = props;

    console.log('이거',list.data[0]);
    console.log('코로나이전',list.data[1]);
    console.log('코로나이후',list.data[2]);
    
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
        labels: list.data[0], //지역 인덱스
        datasets:[
            {
                label:'코로나이전 폐업건수',
                borderWidth:1,
                data: list.data[1],
                backgroundColor:'blue'
            },{
                label:'코로나 이후 폐업건수',
                borderWidth:1,
                data: list.data[2],
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