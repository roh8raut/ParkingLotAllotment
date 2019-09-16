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
    if (obj.id === 1) {
      this.backEndService.parkAVehicle(obj.regNum).subscribe((res: any) => {
        this.response = res;
      },
      (err) => {
          this.error = err;
      });
    }

    if (obj.id === 2) {
      this.backEndService.removeParkedVehicle(obj.regNum).subscribe((res: any) => {
        this.response = res;
      },
      (err) => {
          this.error = err;
      });
    }

    if (obj.id === 3) {
      this.backEndService.getAvailableSlots().subscribe((res: any) => {
          this.response = res;
      },
      (err) => {
          this.error = err;
      });
    }

    if (obj.id === 4) {
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
