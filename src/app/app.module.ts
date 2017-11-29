import { HomePageModule } from './../pages/home/home.module';
import { EnderecoService } from './../pages/cadastro-user/endereco.service';
import { DadosPessoaService } from './../pages/cadastro-user/dados-pessoa.service';
import { AutenticacaoService } from './../service/autenticacao.service';
import { LoginService } from './../pages/login/login.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativeStorage } from '@ionic-native/native-storage';


import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';
import { CartProvider } from '../providers/cart/cart';

import {SearchbarComponent} from '../components/searchbar/searchbar';
import {MenuComponent} from '../components/menu/menu';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { UserInfoProvider } from '../providers/user-info/user-info';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    SearchbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HomePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
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
    LoginServiceProvider,
    UserInfoProvider,
    LoginService,
    AutenticacaoService,
    DadosPessoaService,
    EnderecoService
  ]
})
export class AppModule {}
