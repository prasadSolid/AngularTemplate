import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-dash-board",
  templateUrl: "./dash-board.component.html",
  styleUrls: ["./dash-board.component.scss"],
})
export class DashBoardComponent implements OnInit {
  public jobDistributionChartOptions = {
    legend: {
      position: "right",
      labels: {
        fontSize: 10,
      },
    },
  };
  dateranges = [
    { value: "1", label: "Last 15 Days" },
    { value: "2", label: "Last 30 Days" },
  ];
  public jobDistributionChartLabels = [
    "Pet Licensing",
    "Business Licensing",
    "Service Request",
    "Inspection Request",
    "Other",
  ];
  public jobDistributionChartData = [120, 130, 180, 58, 12];
  public jobDistributionChartType = "pie";
  public barChartPlugins = [pluginDataLabels];
  workflowItems = [
    {
      workflowCode: 1,
      workflowName: "Pet Licensing",
      workflowSubmited: 10,
      workflowInvoiced: 80,
      workflowPaid: 30,
      workflowRecipted: 5,
    },
    {
      workflowCode: 1,
      workflowName: "Business Licensing",
      workflowSubmited: 10,
      workflowInvoiced: 10,
      workflowPaid: 50,
      workflowRecipted: 15,
    },
    {
      workflowCode: 1,
      workflowName: "Service Request",
      workflowSubmited: 40,
      workflowInvoiced: 30,
      workflowPaid: 20,
      workflowRecipted: 30,
    },
  ];
  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(225,10,24,0.2)",
      borderColor: "rgba(225,10,24,0.2)",
      pointBackgroundColor: "rgba(225,10,24,0.2)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(225,10,24,0.2)",
    },
  ];
  public stageDurationChartOptions = {
    scaleShowVerticalLines: false,
    scaleShowHorizontalLines: false,
    scaleShowLines: false,
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        fontSize: 10,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          barPercentage: 0.8,
          gridLines: {
            display: true,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: "center",
        align: "center",
        font: {
          size: 10,
        },
      },
    },
  };
  public stageDurationChartLabels = [
    "Pet Licensing",
    "Business Licensing",
    "Service Request",
    "Inspection Request",
    "Othe",
  ];
  public stageDurationChartType = "horizontalBar";
  public stageDurationChartLegend = true;
  public stageDurationChartData = [
    { data: [65, 59, 80, 81, 56], label: "Completed", stack: "a" },
    { data: [65, 59, 80, 81, 56], label: "In Progress", stack: "a" },
  ];

  public blueprintDurationAnalysisOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          barPercentage: 0.2,
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Avarage (Resolution Timein Days-hours)",
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        font: {
          size: 10,
        },
      },
    },
  };
  public blueprintDurationAnalysisLabels = [
    "Pet Licensing",
    "Business Licensing",
    "Service Request",
    "Inspection Request",
    "Othe",
  ];
  public blueprintDurationAnalysisType = "bar";
  public blueprintDurationAnalysisLegend = true;
  public blueprintDurationAnalysisData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Workflows" },
  ];
  public blueprintDurationAnalysischartColors: Array<any> = [
    {
      backgroundColor: "rgba(225,10,24,0.2)",
      borderColor: "rgba(225,10,24,0.2)",
      pointBackgroundColor: "rgba(225,10,24,0.2)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(225,10,24,0.2)",
    },
  ];

  public blueprintUsageReportOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          barPercentage: 0.2,
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Completed Workflows Count",
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        font: {
          size: 10,
        },
      },
    },
  };

  public blueprintUsageReportLabels = [
    "Pet Licensing",
    "Business Licensing",
    "Service Request",
    "Inspection Request",
    "Othe",
  ];
  public blueprintUsageReportType = "bar";
  public blueprintUsageReportLegend = true;
  public blueprintUsageReportData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Workflows" },
  ];
  public blueprintUsageReportColors: Array<any> = [
    {
      backgroundColor: "#90c7f3",
      borderColor: "rgba(225,10,24,0.2)",
      pointBackgroundColor: "rgba(225,10,24,0.2)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(225,10,24,0.2)",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
