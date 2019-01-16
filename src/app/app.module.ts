import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app.component';
import { MaterialModule } from './material/material.module';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // 3rd party modules
    BrowserModule,
    BrowserAnimationsModule,

    // Feat modules
    CoreModule,
    MaterialModule,

    // Routing module
    AppRoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
