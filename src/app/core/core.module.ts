import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

const coreImports = [
  CommonModule,
  HttpClientModule,
];

@NgModule({
  declarations: [],
  imports     : coreImports,
  exports     : coreImports,
})
export class CoreModule {
}
