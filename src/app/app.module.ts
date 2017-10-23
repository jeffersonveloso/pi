import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativeStorage } from '@ionic-native/native-storage';


import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { TermosPageModule } from '../pages/termos/termos.module';
import {DuvidasPageModule} from '../pages/duvidas/duvidas.module';
import {FeedPageModule} from '../pages/feed/feed.module';
import {CartPageModule} from '../pages/cart/cart.module';
import {HttpModule} from '@angular/http';
import { LoginPageModule } from '../pages/login/login.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';
import { CartProvider } from '../providers/cart/cart';
import { StorageProvider } from '../providers/storage/storage';

import {SearchbarComponent} from '../components/searchbar/searchbar';
import {MenuComponent} from '../components/menu/menu';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SearchbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SettingsPageModule,
    DetalhesPageModule,
    HttpModule,
    TermosPageModule,
    DuvidasPageModule,
    FeedPageModule,
    CartPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    CartProvider,
    StorageProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
