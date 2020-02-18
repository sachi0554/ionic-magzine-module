import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazinesPageRoutingModule } from './magazines-routing.module';

import { MagazinesPage } from './magazines.page';
import { LatestComponent } from './components/latest/latest.component';
import { DownloadComponent } from './components/download/download.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazinesPageRoutingModule
  ],
  declarations: [MagazinesPage, LatestComponent, DownloadComponent, SubscriptionComponent]
})
export class MagazinesPageModule {}
