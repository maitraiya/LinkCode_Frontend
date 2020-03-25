import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-glance',
  templateUrl: './services-glance.component.html',
  styleUrls: ['./services-glance.component.css']
})
export class ServicesGlanceComponent implements OnInit {  
    array = ["<h1></h1>", 2, 3, 4];
  constructor() { }

  
  ngOnInit() {
  }

}
