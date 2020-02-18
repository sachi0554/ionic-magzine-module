import { Component, OnInit, Input } from '@angular/core';
import { Magazine } from 'src/model/magazines.model';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  @Input() magazine: Magazine;
  constructor() { }

  ngOnInit() {}

}
