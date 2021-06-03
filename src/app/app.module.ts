import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpartacusModule} from './spartacus/spartacus.module';
import {MyMiniCartModule} from "./my-mini-cart/my-mini-cart.module";
import {MyCartModule} from "./my-cart/my-cart.module";
import {MyBannerModule} from "./my-banner/my-banner.module";
import {WeatherModule} from "./features/weather/weather.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

const devImports = [];
if (!environment.production) {
  devImports.push(StoreDevtoolsModule.instrument({
    maxAge: 50,
    logOnly: environment.production
  }));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    MyMiniCartModule,
    MyCartModule,
    MyBannerModule,
    WeatherModule,

    // Dev Imports
    ...devImports,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
