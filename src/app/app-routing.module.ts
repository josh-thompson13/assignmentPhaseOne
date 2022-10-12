import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UsersComponent } from './users/users.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ChatComponent } from './chat/chat.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'groups', component:GroupsComponent, canActivate: [AuthguardService] },
  {path:'group/:id', component:GroupComponent, canActivate: [AuthguardService]},
  {path:'createuser', component:CreateuserComponent, canActivate: [AuthguardService]},
  {path:'users', component:UsersComponent, canActivate: [AuthguardService]},
  {path: 'creategroup', component:CreateGroupComponent, canActivate: [AuthguardService]},
  {path: 'chat', component:ChatComponent, canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
