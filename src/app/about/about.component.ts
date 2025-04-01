import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

}
