import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { OrderModule } from 'src/app/order/order.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    OrderModule,
  ],
  providers   : [],
  bootstrap   : [AppComponent],
})
export class AppModule {
}
