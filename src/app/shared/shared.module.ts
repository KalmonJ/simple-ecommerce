import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ProductsModalComponent } from './products-modal/products-modal.component';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    ProductsModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderMenuComponent, ProductsModalComponent]
})
export class SharedModule { }
