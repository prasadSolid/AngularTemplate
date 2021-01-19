import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TownsComponent } from './towns/towns.component';
import { CredentialsComponent} from './credentials/credentials.component'

const routes: Routes = [
         { path : "settings", children : [
         { path: "", component: SettingsComponent },     
         { path: "towns", component: TownsComponent },
         { path: "credentials", component: CredentialsComponent } 
        ]
      }
    ];     
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }