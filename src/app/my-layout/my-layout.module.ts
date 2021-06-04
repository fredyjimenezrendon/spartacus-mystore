import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigModule} from "@spartacus/core";
import {LayoutConfig} from "@spartacus/storefront";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
       LandingPage2Template: {
         lg: {
           slots: ['Section1', 'Section2A', 'Section2B', 'Section2C', 'Section3', 'Section4', 'Section5', 'StaticBannerSlot']
         },
        md: {
           slots: ['Section1', 'Section3', 'Section4']
        },
         sm: {
           slots: ['Section1']
         }
       }
      }
    } as LayoutConfig)
  ]
})
export class MyLayoutModule { }
