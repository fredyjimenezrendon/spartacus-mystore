import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './my-cart.component';
import {CmsConfig, ConfigModule} from "@spartacus/core";

@NgModule({
  declarations: [MyCartComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: MyCartComponent
        }
      }
    } as CmsConfig)
  ]
})
export class MyCartModule { }
