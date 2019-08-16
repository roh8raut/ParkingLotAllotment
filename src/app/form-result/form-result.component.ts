import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss']
})
export class FormResultComponent implements OnInit {


  @Input() formObj: any;
  @Input() data: any;
  @Input() error: any;
  @Output() submitRegNum: EventEmitter<any> = new EventEmitter();
  @Output() hideOverlay: EventEmitter<any> = new EventEmitter();
  @ViewChild('errMsg', {read: ElementRef, static: false}) errMsg: any;


  regNum: string;
  show = true;

   constructor() {
   }

  ngOnInit() {
  }

  onSubmit(btnId: any) {
    this.show = false;
    this.submitRegNum.emit({regNum: this.regNum, id: btnId});
  }

  onHideOverlay() {
    this.show = true;
    this.regNum = '';
    // this.errMsg.nativeElement.hidden = true;
    this.hideOverlay.emit({});
  }

}
