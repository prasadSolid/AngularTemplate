import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ChartsComponent } from './charts/charts.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';



const routes: Routes = [
    { path: '', component: InputComponent },
    { path: 'input', component: InputComponent },
    { path: 'chart', component: ChartsComponent },
    { path: 'datagrid', component: DatagridComponent },
    { path: 'dropdown', component: DropdownsComponent },
    { path: 'scheduler', component: SchedulerComponent },

];

@NgModule({
  declarations: [InputComponent, ChartsComponent, SchedulerComponent, DatagridComponent, DropdownsComponent],
  imports: [
    CommonModule,
    DateInputsModule,
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,

    RouterModule.forChild(routes),
  ],
  
  exports: [
        RouterModule
  ]
})
export class KendoModule { }
