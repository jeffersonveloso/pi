import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalContentPage } from './modal-content';
import { BrMaskerModule} from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    ModalContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalContentPage),
    PipesModule,
    BrMaskerModule
  ],
})
export class ModalContentPageModule {}
