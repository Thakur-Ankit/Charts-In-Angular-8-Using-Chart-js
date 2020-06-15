import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ChartData} from '../domain/ChartData';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild('barChart', null) private chartRef;
  chart: any;
  barChartData: ChartData[] = [
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
    this.getDataForBarChart();
    this.createBarChart();
  }

  getDataForBarChart() {
    this.barChartData.forEach(lineChartData => {
      this.yearArray.push(lineChartData.year);
      this.noOfDolphinsArray.push(lineChartData.numberOfDolphins);
    });
  }

  createBarChart() {
    const option = {
      title: {display: true, text: 'Bar Chart', fontColor: '#000', fontSize: 14, position: 'top'},
      legend: {display: true, position: 'bottom'},
      scales: {
        xAxes: [{display: true}],
        yAxes: [{display: true}]
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      options: option,
      data: {
        labels: this.yearArray,
        datasets: [
          {
            data: this.noOfDolphinsArray,
            backgroundColor: ['#77ec22', '#ecdf66', '#2651ec', '#12ec8f', '#843bec', '#4eec81'],
            borderColor: '#7cb30e',
            label: 'Number Of Dolphins',
            fill: true
          }],
      }
    });
  }
}
