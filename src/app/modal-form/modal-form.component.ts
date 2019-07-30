import { Component, OnInit } from '@angular/core';
import tabLabels from '../data.json';
import { BackendApiService } from '../services/backend-api.service';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  tabLabels: Array<object> = tabLabels;
  dataArr: any;
  showOverlay: boolean;
  isLoading = false;
  regNum: string;
  regNumInValid = true;


  constructor(private data: BackendApiService) {}

  ngOnInit() {}

  checkLength(e: any) {
    console.log(e.keyCode, this.regNum);
    if (e.keyCode > 47 && e.keyCode < 58) {
      this.regNumInValid = this.regNum.length > 3 ? false : true;
    }
  }

  callApiService(e: any) {
    this.isLoading =  true;
    this.showOverlay = true;

    if (e.target.id === 'addSlot') {
      this.data.getAllSlots().subscribe((data) => {
        console.log(data);
        this.dataArr = data;
        this.isLoading = false;
      });
    }

    if (e.target.id === 'removeSlot') {

    }

    if (e.target.id === 'showSlots') {

    }

    if (e.target.id === 'getSlot') {

    }

  }


  tabChanged(e: any) {
    this.dataArr = [];
    this.regNum = '';
    this.regNumInValid = true;
  }
}
