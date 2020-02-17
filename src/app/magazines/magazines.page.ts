import { Component, OnInit } from '@angular/core';
import {SegmentChangeEventDetail} from '@ionic/core';
import { ServicesService } from './services.service';
import { Magazine } from './magazines.model';

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.page.html',
  styleUrls: ['./magazines.page.scss'],
})
export class MagazinesPage implements OnInit {
  magazine: Magazine [];
  selectSegment = 'latest';
  constructor(private magazineService: ServicesService) { }

  ngOnInit() {
    this.magazine = this.magazineService.magazines;
  }
  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    this.selectSegment = event.detail.value;
  }

}
