import { Component, OnInit } from '@angular/core';
import { SampleLineChartColorts } from '../../shared/chart.colors'

const SampleLineChartData: any[] = [
  {data: [32,14,46,23,38,56], label: 'Sentiment Analysis'},
  {data: [15,22,69,23,46,22], label: 'Image Recognition'},
  {data: [22,59,64,17,64,33], label: 'Forecasting'}
];

const SampleLineChartLabels: string[] = ['Jan', 'Feb', 'Mar','Apr','May','Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData: any[] = SampleLineChartData;
  public lineChartLabels: string[] = SampleLineChartLabels;
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartColors: any[] = SampleLineChartColorts;

  ngOnInit() {
  }

}
