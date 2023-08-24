import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-ngonchange',
  templateUrl: './child-ngonchange.component.html',
  styleUrls: ['./child-ngonchange.component.css'],
})
export class ChildNgonchangeComponent {
  constructor() {
    console.log('constructor call');
  }
  @Input() userinput: string = '';
  ngOnInit() {
    console.log('ngOnInit call');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call');
    console.log(changes['userinput'].currentValue);
  }
}
