import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellersComponent } from './best-sellers.component';
import {RouterModule} from "@angular/router";
import {CmsPageGuard, provideCmsStructure} from "@spartacus/storefront";
import {ConfigModule} from "@spartacus/core";
import {MyBannerComponent} from "../my-banner/my-banner.component";

@NgModule({
  declarations: [BestSellersComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        StaticBanner: MyBannerComponent
      }
    }),
    RouterModule.forChild([
      {
        path: 'best-sellers',
        component: BestSellersComponent,
        canActivate: [CmsPageGuard],
        data: {pageLabel: 'homepage'},
      }
    ])
  ],
  providers: [
    provideCmsStructure({
      componentId: 'StaticBanner',
      pageSlotPosition: 'StaticBannerSlot'
    })
  ]
})
export class BestSellersModule { }
