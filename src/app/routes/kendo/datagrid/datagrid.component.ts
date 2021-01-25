import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid/dist/es2015/main';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';


import { employees } from './employees';
import { images } from './images';
import { RatingComponent } from './rating.component';



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

  // Grid filter
  public statefilter: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
        logic: 'and',
        filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
      }
    };

    public gridDataFilter: GridDataResult = process(sampleProducts, this.state);

    public dataStateChangeFilter(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridDataFilter = process(sampleProducts, this.state);
    }

  // Multi function grig
  // @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    public gridDataMf: any[] = employees;
    public gridView: any[];

    public mySelection: string[] = [];

    public ngOnInitMf(): void {
        this.gridDataMf = this.gridDataMf;
    }

    public onFilter(inputValue: string): void {
        this.gridView = process(this.gridDataMf, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'full_name',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'job_title',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'budget',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'phone',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'address',
                        operator: 'contains',
                        value: inputValue
                    }
                ],
            }
        }).data;

        // this.dataBinding.skip = 0;
    }

    private photoURL(dataItem: any): string {
        const code: string = dataItem.img_id + dataItem.gender;
        const image: any = images;

        return image[code];
    }

    private flagURL(dataItem: any): string {
        const code: string = dataItem.country;
        const image: any = images;

        return image[code];
    }

  constructor() { }

  ngOnInit(): void {
  }

}
