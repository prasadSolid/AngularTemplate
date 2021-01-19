import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CredentialsComponent} from './credentials/credentials.component';
import { TownsComponent } from './towns/towns.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    SharedModule ,
    SettingsRoutingModule ,
    TabsModule.forRoot() 
  ],
  declarations: [
    SettingsComponent,  
    CredentialsComponent,
    TownsComponent        
  ],
  exports :[
    SettingsComponent,  
    CredentialsComponent,
    TownsComponent  
  ]
})
export class SettingsModule { }
