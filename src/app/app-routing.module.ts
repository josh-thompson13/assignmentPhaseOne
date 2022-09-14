import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'groups', component:GroupsComponent, canActivate: [AuthguardService] },
  {path:'group/:id', component:GroupComponent, canActivate: [AuthguardService]},
  {path:'createuser', component:CreateuserComponent, canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
