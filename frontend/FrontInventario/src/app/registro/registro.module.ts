import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [FormComponent, ButtonsComponent, ImageComponent],
  imports: [
    CommonModule
  ]
})
export class RegistroModule { }
