import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ChartData} from '../domain/ChartData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild('pieChart', null) private chartRef;
  chart: any;
  pieChartData: ChartData[] = [
    {year: 2017, numberOfDolphins: 58},
    {year: 2018, numberOfDolphins: 51},
    {year: 2019, numberOfDolphins: 93},
    {year: 2020, numberOfDolphins: 165},
    {year: 2021, numberOfDolphins: 113},
    {year: 2022, numberOfDolphins: 159}
  ];
  yearArray = [];
  noOfDolphinsArray = [];

  constructor() {
  }

  ngOnInit() {
    this.getDataForPieChart();
    this.createPieChart();
  }

  getDataForPieChart() {
    this.pieChartData.forEach(pieChartData => {
      this.yearArray.push(pieChartData.year);
      this.noOfDolphinsArray.push(pieChartData.numberOfDolphins);
    });
  }

  createPieChart() {
    const option = {
      title: {display: true, text: 'Pie Chart', fontColor: '#000', fontSize: 14, position: 'top'},
      legend: {display: false, position: 'bottom'},
      scales: {
        xAxes: [{display: true}],
        yAxes: [{display: true}]
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'pie',
      options: option,
      data: {
        labels: this.yearArray,
        datasets: [
          {
            data: this.noOfDolphinsArray,
            backgroundColor: ['#77ec22', '#ecdf66', '#2651ec', '#12ec8f', '#843bec', '#4eec81'],
            borderColor: '#7cb30e',
            fill: true
          }],
      }
    });
  }
}
