import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  f1(){alert('hello');}
 }
