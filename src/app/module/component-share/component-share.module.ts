import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../component/atoms/button/button.component';
import { TextInputComponent } from '../../component/atoms/text-input/text-input.component';
import { BaseTemplateComponent } from '../../component/template/base-template/base-template.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    TextInputComponent,

    BaseTemplateComponent,
  ],
  exports: [
    // CommonModule,
    ButtonComponent,
    TextInputComponent,

    BaseTemplateComponent,

  ]
})
export class ComponentShareModule { }
