import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-er-patients',
  templateUrl: './er-patients.component.html',
  styleUrls: ['./er-patients.component.scss']
})
export class ERPatientsComponent {

  public chart: any;

  chartData=[
    {
      date:'2022-05-10',
      salesCount:'542',
      profitCount:'530'
    
    },
    {
      date:'2022-05-11',
      salesCount:'242',
      profitCount:'302'
    },
    {
      date:'2022-05-12',
      salesCount:'176',
      profitCount:'367'
    },
    {
      date:'2022-05-13',
      salesCount:'442',
      profitCount:'262'
    },
    {
      date:'2022-05-14',
      salesCount:'402',
      profitCount:'142'
    },
    {
      date:'2022-05-15',
      salesCount:'333',
      profitCount:'287'
    },
    {
      date:'2022-05-16',
      salesCount:'142',
      profitCount:'342'
    }
  ]
  

  ngOnInit(): void {
    this.createChart(this.chartData);
  }

  createChart(cData:any){
    const labels = cData.map((entry:any) => entry.date);
    const salesData = cData.map((entry:any) => entry.salesCount);
    const profitData = cData.map((entry:any) => entry.profitCount);
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels, 
	       datasets: [
          {
            label: "Sales",
            data: salesData,
            backgroundColor: 'blue',
            borderColor: 'blue',
          },
          {
            label: "Profit",
            data: profitData,
            backgroundColor: 'green',
            borderColor: 'green',
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  
}