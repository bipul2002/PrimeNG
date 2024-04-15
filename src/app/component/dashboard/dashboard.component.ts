import { Component } from '@angular/core';
import { Product,products } from 'src/app/data/product';
import { AccordionItem, accordionData } from 'src/app/data/accordion'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  accordionData: AccordionItem[] = accordionData;
  products: Product[] = products;
  lineChartData: any;
  lineChartOptions: any;
  barChartData: any;
  barChartOptions: any;

  constructor() {


    this.barChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Revenue',
          data: [80, 85, 75, 90, 95, 85, 90], 
          backgroundColor: 'rgba(255, 99, 132, 0.5)' 
        },
        {
          label: 'Profit',
          data: [70, 75, 65, 80, 85, 75, 80], 
          backgroundColor: 'rgba(54, 162, 235, 0.5)' 
        }
      ]
    };

    this.barChartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 100 
          }
        }]
      },
      legend: {
        position: 'top' 
      }
    };
    
    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Mobile Users',
          data: [1000, 1500, 2000, 1800, 2200, 2500, 2300],
          fill: false,
          borderColor: '#007bff'
        },
        {
          label: 'Website Users',
          data: [1200, 1600, 1800, 2000, 1900, 2300, 2200],
          fill: false,
          borderColor: '#28a745'
        }
      ]
    };

    this.lineChartOptions = {
      responsive: true,
      title: {
        display: true,
        text: 'Monthly Sales'
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Sales ($)'
          }
        }]
      }
    };
  }


}
