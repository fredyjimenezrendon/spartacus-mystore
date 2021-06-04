import { Component, OnInit } from '@angular/core';
import {BannerComponent, CmsComponentData} from "@spartacus/storefront";
import {CmsBannerComponent} from "@spartacus/core";

@Component({
  selector: 'app-my-banner',
  templateUrl: './my-banner.component.html',
  styleUrls: ['./my-banner.component.scss']
})
export class MyBannerComponent extends BannerComponent implements OnInit{

  constructor(protected component: CmsComponentData<CmsBannerComponent>) {
    super(component);
  }

  ngOnInit(): void {
    this.component.data$.subscribe(console.log)
  }

  getTarget(data: CmsBannerComponent): string | null {
    return data.external === 'true' || data.external === true ? '_blank' : null;
  }

}
