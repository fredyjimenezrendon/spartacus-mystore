import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDetailComponent } from './sales-detail.component';
import {CmsConfig, ConfigModule} from "@spartacus/core";

@NgModule({
  declarations: [SalesDetailComponent],
  imports: [
    ConfigModule.forRoot({
      cmsComponents: {
        SalesDetailComponent: {
          component : SalesDetailComponent
        }
      }
    } as CmsConfig),
    CommonModule
  ]
})
export class SalesDetailModule { }
