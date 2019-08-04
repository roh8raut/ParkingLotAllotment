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

  onInputChangeVerify(e: any) {
    const numRegEx = new RegExp('^[0-9]$');

    if (!(e.keyCode === 8 || e.keyCode === 16 || e.keyCode === 39 || e.keyCode === 40)) {
      if (!numRegEx.test(e.key)) {
          this.errMsg.nativeElement.style.display = 'block';
          return false;
      } else {
          this.errMsg.nativeElement.style.display = 'none';
      }
    }
  }

  onSubmit(btnId: string) {
    this.show = false;
    this.submitRegNum.emit({regNum: this.regNum, id: btnId});
  }

  onHideOverlay() {
    this.show = true;
    this.hideOverlay.emit({});
  }

}
