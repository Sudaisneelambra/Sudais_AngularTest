import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { HomeComponent } from './components/homecomponent/homecomponent.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'usercomponent',
    component:UserListComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
