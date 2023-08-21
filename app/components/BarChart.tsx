import { useState , useEffect } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
 

  
  export default function BarChart({color}:any) {
    const initialChartData = {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
            datasets:[
                {  
                data:[80 , 35 , 55 , 100 , 35, 50 , 32 , 50 , 60  , 70 , 100 ,20],
                backgroundColor:color, 
                }
            ]
      };
    const [chartData , setChartData] = useState(initialChartData)
    const [chartOption , setChartOption] = useState({})

    useEffect(() =>{
        setChartOption({
            scales: {
                x: {
                  grid: {
                    display: false, 
                  },
                },
                y: {
                  
                  grid: {
                    display: false,
                  },
                  ticks: {
                    stepSize: 20,
                    
                   
                  },
                },},
         
        maintainAspectRatio:false,
        animation: false,
        responsive:true,
        
        })
    }, [])
    return (
      <Box>
        <Bar data={chartData} options={chartOption}/>
      </Box>
    )
  }
  