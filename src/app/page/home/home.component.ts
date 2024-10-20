import { Component } from '@angular/core';
import { ComponentShareModule } from '../../module/component-share/component-share.module';
import { MaterialShareModule } from '../../module/material-share/material-share.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ComponentShareModule, MaterialShareModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
