import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagazinesPage } from './magazines.page';

describe('MagazinesPage', () => {
  let component: MagazinesPage;
  let fixture: ComponentFixture<MagazinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagazinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
