import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusPedidosPage } from './meus-pedidos';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MeusPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusPedidosPage),
    PipesModule
  ],
})
export class MeusPedidosPageModule {}
