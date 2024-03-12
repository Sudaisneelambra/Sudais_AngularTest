import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';

const routes: Routes = [
  {
    path:'/usercomponent',
    component:UserListComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
