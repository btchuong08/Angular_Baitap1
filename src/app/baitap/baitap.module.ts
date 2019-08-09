import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaitapComponent } from './baitap.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [ BaitapComponent, HeaderComponent, CarouselComponent, SmartphoneComponent, LaptopComponent, PromotionComponent, ProductItemComponent],
  exports:[BaitapComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }
