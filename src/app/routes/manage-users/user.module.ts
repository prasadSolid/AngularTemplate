import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ManageUsersComponent } from '.';
import { RouterModule } from '../../../node_modules/@angular/router';

/* const userRouting: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'login',
      component: LoginComponent,
      canActivate: [NoAuthGuard],
      data: { title: 'Home' }
  }
]);
*/

@NgModule({
  imports: [
    SharedModule
    ],
  declarations: [
    LoginComponent,
    ManageUsersComponent
  ]
  
})
export class UserModule { }
