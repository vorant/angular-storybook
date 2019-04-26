import { NgModule } from '@angular/core';
import { MyButtonComponent } from './my-button/my-button.component';
import { InversePipe } from './inverse.pipe';
import { TokenComponent } from './token/token.component';

@NgModule({
  imports: [],
  declarations: [MyButtonComponent, InversePipe, TokenComponent],
  exports: [MyButtonComponent, InversePipe, TokenComponent]
})
export class UiModule {}
