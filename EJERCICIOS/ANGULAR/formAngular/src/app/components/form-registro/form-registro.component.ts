import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})
export class FormRegistroComponent {

  user = new UserDto('', '', '', '', '', '', '', '');

  submitted = false
}
