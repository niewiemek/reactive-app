import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderViewComponent } from './order-view.component';

@NgModule({
  declarations: [OrderViewComponent],
  imports     : [
    CommonModule,
  ],
  exports     : [OrderViewComponent],
})
export class OrderViewModule {
}
