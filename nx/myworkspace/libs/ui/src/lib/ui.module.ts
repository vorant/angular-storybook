import { NgModule } from '@angular/core';
import { MyButtonComponent } from './my-button/my-button.component';
import { InversePipe } from './inverse.pipe';

@NgModule({
  imports: [],
  declarations: [MyButtonComponent, InversePipe],
  exports: [MyButtonComponent, InversePipe]
})
export class UiModule {}
