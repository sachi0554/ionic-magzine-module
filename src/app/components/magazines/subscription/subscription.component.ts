import { Component, OnInit, Input } from '@angular/core';
import { Magazine } from 'src/app/magazines/magazines.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  @Input() magazine: Magazine;
  constructor() { }

  ngOnInit() {}

}
