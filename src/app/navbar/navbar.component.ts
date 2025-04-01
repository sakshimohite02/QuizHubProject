import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  username: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username'); // Get username from local storage
  }

  logout(): void {
    localStorage.removeItem('username'); // Remove username
    this.router.navigate(['/login']); // Redirect to login page
  }
}
