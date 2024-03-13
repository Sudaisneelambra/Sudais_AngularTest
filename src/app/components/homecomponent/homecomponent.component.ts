import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  gotousers() {
    this.router.navigate(['/usercomponent']);
  }
}
