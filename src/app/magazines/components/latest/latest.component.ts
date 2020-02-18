import { Component, OnInit, Input } from '@angular/core';
import { Magazine } from 'src/model/magazines.model';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
 @Input() magazine: Magazine;
 // tslint:disable-next-line: ban-types
 progress = 0;
 interval;
  constructor() { }

  ngOnInit() {}

 increaseProgress() {

  this.interval = setInterval(() => {
     console.log(this.progress);
     // tslint:disable-next-line: no-unused-expression
     this.progress += .1 ;
     if (this.progress > 1.0) {
        clearInterval(this.interval);
     }
    }, 100);
 }

}
