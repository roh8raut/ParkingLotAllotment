import { Component, OnInit } from '@angular/core';
import tabsData from '../data.json';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements OnInit {

  tabsData = tabsData;
  constructor() { }

  ngOnInit() {
  }

}
