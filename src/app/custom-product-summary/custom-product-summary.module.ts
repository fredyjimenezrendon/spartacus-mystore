import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomProductSummaryComponent} from './custom-product-summary.component';
import {CmsConfig, ConfigModule} from "@spartacus/core";

@NgModule({
  // declarations: [CustomProductSummaryComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSummaryComponent: {
          // component: CustomProductSummaryComponent
          component: () => import('./custom-product-summary.component').then(m => m.CustomProductSummaryComponent),
        }
      }
    } as CmsConfig)
  ]
})
export class CustomProductSummaryModule { }
