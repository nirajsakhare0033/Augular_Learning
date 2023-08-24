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

  counter:any;
  num:number=1;

  

  ngOnInit() {
    console.log('ngOnInit call');
    this.counter=setInterval(()=>{
      this.num=this.num+1;
      console.log(this.num);
      
    })

    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call');
    //console.log(changes['userinput'].currentValue);
  }

  //ngDoCheck()

  ngDoCheck() {
    console.log('ngDoCheck Call');
  }

  //ngAfterContentInit()
  ngAfterContentInit() {
    console.log('ngAfterContentInit Call');
  }
  // ngAfterContentChecked()
  ngAfterContentChecked() {
    console.log(' ngAfterContentChecked called' );
    
  }

  //ngAfterViewInit()
  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewchecked called");
    
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
    clearInterval(this.counter)
    
  }
}
