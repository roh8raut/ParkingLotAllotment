import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() data: any;
  @Input() isLoading: boolean;
  @Input() showOverlay: boolean;

  constructor() {}


  ngOnInit() {}

}
