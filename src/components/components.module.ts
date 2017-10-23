import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { SearchbarComponent } from './searchbar/searchbar';


@NgModule({
	declarations: [MenuComponent,
    SearchbarComponent],
	imports: [],
	exports: [MenuComponent,
    SearchbarComponent]
})
export class ComponentsModule {}
