import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid/dist/es2015/main';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

      public state: State = {
        skip: 0,
        take: 5,

        // Initial filter descriptor
        filter: {
          logic: 'and',
          filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
        }
    };

    public gridData: GridDataResult = process(sampleProducts, this.state);

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(sampleProducts, this.state);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
