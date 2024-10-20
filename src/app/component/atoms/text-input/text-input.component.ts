import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialShareModule } from '../../../module/material-share/material-share.module';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule, MaterialShareModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  inputValue = ''
}
