import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {StackedBarData} from '../domain/StackedBarData';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {

  @ViewChild('stackedBarChart', null) private chartRef;
  chart: any;
  stackedBarChartData: StackedBarData[] = [
    {year: 2017, numberOfDolphins: 58, numberOfWhales: 100},
    {year: 2018, numberOfDolphins: 51, numberOfWhales: 84},
    {year: 2019, numberOfDolphins: 93, numberOfWhales: 121},
    {year: 2020, numberOfDolphins: 165, numberOfWhales: 90},
    {year: 2021, numberOfDolphins: 113, numberOfWhales: 72},
    {year: 2022, numberOfDolphins: 159, numberOfWhales: 134}
  ];
  yearArray = [];
  noOfDolphinsArray = [];
  noOfWhalesArray = [];

  constructor() {
  }

  ngOnInit() {
    this.getDataForStackedBarChart();
    this.createStackedBarChart();
  }

  getDataForStackedBarChart() {
    this.stackedBarChartData.forEach(lineChartData => {
      this.yearArray.push(lineChartData.year);
      this.noOfDolphinsArray.push(lineChartData.numberOfDolphins);
      this.noOfWhalesArray.push(lineChartData.numberOfWhales);
    });
  }

  createStackedBarChart() {
    const option = {
      title: {display: true, text: 'Stacked Bar Chart', fontColor: '#000', fontSize: 14, position: 'top'},
      legend: {display: true, position: 'bottom'},
      scales: {
        xAxes: [{gridLines: {display: true}, stacked: true}],
        yAxes: [{gridLines: {display: true}, stacked: true}]
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
            backgroundColor: '#843bec',
            borderColor: '#7cb30e',
            label: 'Number Of Dolphins',
            fill: true
          },
          {
            data: this.noOfWhalesArray,
            backgroundColor: '#ecdf66',
            borderColor: '#7cb30e',
            label: 'Number Of Whales',
            fill: true
          }],
      }
    });
  }
}
