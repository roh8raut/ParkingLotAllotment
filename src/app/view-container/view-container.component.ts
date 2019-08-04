import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import tabsData from '../data.json';
import { BackendApiService } from '../services/backend-api.service';



@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements OnInit {


  @ViewChild('overlay', {read: ElementRef, static: false}) formInput: any;

  tabsData = tabsData;
  formObj: any;
  formElement: HTMLDivElement;
  response: any;
  error: any;

  constructor(private backEndService: BackendApiService) { }

  ngOnInit() {
  }

  cardClicked(obj: any) {
    this.formElement = this.formInput.nativeElement.firstElementChild;
    this.formElement.style.display = 'block';
    this.formObj = obj;
  }

  hideOverlay() {
    this.formElement.style.display = 'none';
    this.response = '';
    this.error = '';
  }

  callApiService(obj: any) {

    if (obj.id.indexOf('park') > -1) {
      console.log("park");
      this.backEndService.parkAVehicle(obj.regNum).subscribe((res: any) => {
        console.log("this.reposne", res);
        this.response = res;
      },
      (err) => {
          this.error = err;
      });
    }

    if (obj.id.indexOf('available') > -1) {
      this.backEndService.getAvailableSlots().subscribe((res: any) => {
          console.log(res);
          this.response = res;
      },
      (err) => {
          this.error = err;
      });
    }

    if (obj.id.indexOf('remove') > -1) {
      this.backEndService.removeParkedVehicle(obj.regNum).subscribe((res: any) => {
        console.log("res>>>>>>>>>>.",res);
        this.response = res;
      },
      (err) => {
          this.error = err;
      });
    }

    if (obj.id.indexOf('get') > -1) {
      this.backEndService.getSlot(obj.regNum).subscribe((res: any) => {
        this.response = res;
      },
      (err) => {
          this.error = err;
      }
      );
    }
  }
}
