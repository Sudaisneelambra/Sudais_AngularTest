import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './components/homecomponent/homecomponent.component';
import { ErroralertComponent } from './components/erroralert/erroralert.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponentComponent,
    LoadingComponent,
    HomeComponent,
    ErroralertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
