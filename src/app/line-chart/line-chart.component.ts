import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ChartData} from '../domain/ChartData';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild('lineChart', null) private chartRef;
  chart: any;
  lineChartData: ChartData[] = [
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
    this.getDataForLineChart();
    this.createLineChart();
  }

  getDataForLineChart() {
    this.lineChartData.forEach(lineChartData => {
      this.yearArray.push(lineChartData.year);
      this.noOfDolphinsArray.push(lineChartData.numberOfDolphins);
    });
  }

  createLineChart() {
    const option = {
      title: {display: true, text: 'Line Chart', fontColor: '#000', fontSize: 14, position: 'top'},
      legend: {display: true, position: 'bottom'},
      scales: {
        xAxes: [{display: true}],
        yAxes: [{display: true}]
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      options: option,
      data: {
        labels: this.yearArray,
        datasets: [
          {
            data: this.noOfDolphinsArray,
            backgroundColor: '#7cb5ec',
            borderColor: '#7cb30e',
            label: 'Number Of Dolphins',
            fill: false
          }],
      }
    });
  }
}
