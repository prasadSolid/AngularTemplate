import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../../shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { ExtendedComponent } from './extended/extended.component';
import { AngulargridComponent } from './angulargrid/angulargrid.component';
import { NgxdatatableComponent } from './ngxdatatable/ngxdatatable.component';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';

const routes: Routes = [
    { path: 'standard', component: StandardComponent },
    { path: 'extended', component: ExtendedComponent },
    { path: 'aggrid', component: AngulargridComponent },
    { path: 'ngxdatatable', component: NgxdatatableComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([AngulargridComponent]),
        NgxDatatableModule,
        BsDatepickerModule,
        IntlModule,
        DateInputsModule,
        LabelModule
    ],
    declarations: [
        StandardComponent,
        ExtendedComponent,
        AngulargridComponent,
        NgxdatatableComponent,
    ],
    exports: [
        RouterModule
    ]
})
export class TablesModule { }
