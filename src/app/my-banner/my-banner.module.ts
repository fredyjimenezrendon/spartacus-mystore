import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBannerComponent } from './my-banner.component';
import {ConfigModule} from "@spartacus/core";
import {MediaModule} from "@spartacus/storefront";

@NgModule({
  declarations: [MyBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: MyBannerComponent
        }
      }
    }),
    MediaModule
  ]
})
export class MyBannerModule { }
