import { Injectable } from '@angular/core';
import { Magazine } from '../model/magazines.model';

@Injectable({
  providedIn: 'root'
})
export class MagazinesService {
  private _magazines: Magazine[] = [
      new Magazine(
      '1', 'TIME', 'new eduge technology', 'https://img.timeinc.net/time/magazine/archive/covers/2006/1101061023_400.jpg', Date()
      ),
      new Magazine(
      '2', 'Forbes', 'Fashion magazine', 'https://img.timeinc.net/time/magazine/archive/covers/2006/1101061023_400.jpg', Date()
        ),
      new Magazine(
      '3', 'GLAMOUR', 'Card Technology magazine', 'https://www.designinfo.in/5956-medium_default/glamour-usa.jpg', Date()
        )
  ];

 get magazines() {
    return [...this._magazines];
  }
  constructor() { }
}
