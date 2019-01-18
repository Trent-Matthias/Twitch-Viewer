import { NgModule } from '@angular/core';
import { CoreMaterialModule } from './core-material.module';
import { CoreRoutingModule } from './core-routing.module';
import { NavigationContainerComponent } from './containers/navigation-container/navigation-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppEffects } from '../app.effects';
import { reducers, metaReducers } from '../reducers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  StoreRouterConnectingModule,
  NavigationActionTiming
} from '@ngrx/router-store';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
// import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [NavigationContainerComponent, NavigationComponent],
  imports: [
    CoreMaterialModule,
    CoreRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [NavigationContainerComponent]
})
export class CoreModule {}
