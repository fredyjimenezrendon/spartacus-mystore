import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CmsConfig, ConfigModule, UrlModule} from "@spartacus/core";

import {MyMiniCartComponent} from './my-mini-cart.component';
import {IconModule} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [MyMiniCartComponent],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: MyMiniCartComponent
        }
      }
    } as CmsConfig),
    IconModule,
    RouterModule
  ]
})
export class MyMiniCartModule { }
