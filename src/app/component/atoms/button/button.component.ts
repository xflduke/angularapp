import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialShareModule } from '../../../module/material-share/material-share.module';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MaterialShareModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonClass = 'default-button';
  @Output() handleClick = new EventEmitter();

  matClick(e: MouseEvent) {
    this.handleClick.emit(e)
  }
}
