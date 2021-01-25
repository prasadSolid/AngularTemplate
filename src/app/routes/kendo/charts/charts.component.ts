import { Component, OnInit } from '@angular/core';

import { LegendItemVisualArgs } from '@progress/kendo-angular-charts';
import { Path, Text, Group, geometry, Element, Rect as RectShape } from '@progress/kendo-drawing';
const { Point, Rect, Size } = geometry;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {


 
  public pieData: any[] = [
    { category: '0-14', value: 0.2545 },
    { category: '15-24', value: 0.1552 },
    { category: '25-54', value: 0.4059 },
    { category: '55-64', value: 0.0911 },
    { category: '65+', value: 0.0933 }
  ];

  public dataDonut : any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public weatherData = [
    { month: 'January', min: 5, max: 11 },
    { month: 'February', min: 5, max: 13 },
    { month: 'March', min: 7, max: 15 },
    { month: 'April', min: 10, max: 19 },
    { month: 'May', min: 13, max: 23 },
    { month: 'June', min: 17, max: 28 },
    { month: 'July', min: 20, max: 30 },
    { month: 'August', min: 20, max: 30 },
    { month: 'September', min: 17, max: 26 },
    { month: 'October', min: 13, max: 22 },
    { month: 'November', min: 9, max: 16 },
    { month: 'December', min: 6, max: 13 }
  ];

  public labelContentFrom(e: any): string {
      return `${ e.value.from } °C`;
  }

  public labelContentTo(e: any): string {
      return `${ e.value.to } °C`;
  }

  public cashFlowData = [{
    period: 'Beginning\\nBalance',
    amount: 50000
  }, {
    period: 'Jan',
    amount: 17000
  }, {
    period: 'Feb',
    amount: 14000
  }, {
    period: 'Mar',
    amount: -12000
  }, {
    period: 'Q1',
    summary: 'runningTotal'
  }, {
    period: 'Apr',
    amount: -22000
  }, {
    period: 'May',
    amount: -18000
  }, {
    period: 'Jun',
    amount: 10000,
    color: '#f00000'
  }, {
    period: 'Q2',
    summary: 'runningTotal'
  }, {
    period: 'Ending\\nBalance',
    summary: 'total',
    // color: '#f00000'
  }];

  public pointColor(point: any): string {
    const summary = point.dataItem.summary;
    if (summary) {
      return summary === 'total' ? '#555' : 'gray';
    }

    if (point.value > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  public isOverLegend = false;
    public data = [
        { name: '2018', type: 'line', data: [123, 276, 310, 212, 240, 156, 98] },
        { name: '2019', type: 'line', dashType: 'dashdot', data: [165, 210, 287, 144, 190, 167, 212] },
        { name: '2020', type: 'line', data: [56, 140, 195, 46, 123, 78, 95] }
    ];

    public labelsVisual(args: LegendItemVisualArgs): Element {
        if (args.series.name === '2019') {
            // Create rectangular shape on top of which the label will be drawn
            const rectOptions = { stroke: { width: 0, color: '#fff' }, fill: { color: 'transparent' } };
            const rectGeometry = new Rect(new Point(0, 3), new Size(60, 10));
            const rect: RectShape = new RectShape(rectGeometry, rectOptions);

            // Create the lines used to represent the custom legend item
            const pathColor = args.options.markers.border.color;
            const path1 = new Path({
                stroke: {
                    color: pathColor,
                    width: 3
                }
            });

            const path2 = new Path({
                stroke: {
                    color: pathColor,
                    width: 3
                }
            });

            // The paths are constructed by using a chain of commands
            path1.moveTo(0, 7).lineTo(10, 7).close();
            path2.moveTo(15, 7).lineTo(25, 7).close();

            // Create the text associated with the legend item
            const labelText = args.series.name;
            const labelFont = args.options.labels.font;
            const fontColor = args.options.labels.color;
            const textOptions = { font: labelFont, fill: { color: fontColor } };
            const text = new Text(labelText, new Point(27, 0), textOptions);

            // Place all the shapes in a group
            const group = new Group();

            group.append(rect, path1, path2, text);

            // set opacity if the legend item is disabled
            if (!args.active) {
                group.opacity(0.5);
            }

            return group;
        }
        // return the default visualization of the legend items
        return args.createVisual();
    }
  



    // Common Styles
    public majorTicks = {
      color: '#909FA7',
    }
    public majorGridLines = {
      color: '#909FA7',
      visible: true
    }
    public line = {
      color: '#909FA7',
    };
    public title = {
      color: '#909FA7',
      padding: 10
    }
    public labels = {
      color: '#909FA7',
    };


    
  constructor() { }

  ngOnInit(): void {
  }

}
