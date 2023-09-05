import React, { useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';



export const ChartComp = ({ porcentajes }) => {
  const chartRef = useRef(null);

    useEffect(() => {
      const {grasaCorp, masaOpor, masaRpor, masaMus} = porcentajes
      console.log("Valores de porcentajes:", grasaCorp, masaOpor, masaRpor, masaMus);
    
    const ctx = document.getElementById('chartComp');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
     const newChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Masa grasa', 'Masas ósea', 'Masa residual', 'Masa muscular'],
        datasets: [{
          label: 'Porcentaje respecto al peso',
          data: [grasaCorp, masaOpor, masaRpor, masaMus],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    chartRef.current = newChart;
    }, [porcentajes])
    
    
  return (
      <canvas id='chartComp' width='200' height='200'></canvas>
  )
}