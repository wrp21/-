import React from 'react';
import {Line} from 'react-chartjs-2';

export const LineChart = (props)=>{



    const list = props;
    console.log('데이터 확인 하는중!',list.data);

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
        labels:list.data[0],
        datasets:[
            {
                borderWidth:1,
                data:list.data[1],
                backgroundColor:'rgb(75,192,192)',
                borderColor:'rgb(75,192,192)'
                
            }
        ]
    };

    return(
        <div>
            <Line data={data} option={options}></Line>
        </div>
    );
}