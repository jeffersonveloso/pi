import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizarPedidoPage } from './finalizar-pedido';

@NgModule({
  declarations: [
    FinalizarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizarPedidoPage),
    PipesModule
  ],
})
export class FinalizarPedidoPageModule {}
