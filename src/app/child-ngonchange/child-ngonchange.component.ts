import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-ngonchange',
  templateUrl: './child-ngonchange.component.html',
  styleUrls: ['./child-ngonchange.component.css']
})
export class ChildNgonchangeComponent {
@Input() userinput:string='';
constructor(){}
 

}
