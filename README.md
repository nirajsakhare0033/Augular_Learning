# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular Component Life-Cycle-Hooks

## ngOnChange()

--> This is first hook after constructor ngOnChange use interface when you use ngOnChange implementes interface and this hooks pass arrguments. this is only hook pass the arrguments

**constructor(){ --- }**

**ngOnchange(changes: simpleChanges){ --- }**

**ngOnInit(){ --- }**

--------------Calling-------------

**1. constructor**

**2. ngOnChange**

**3. ngOnInit**

**Implmentation Steps := Child Component type this code**

```child.component.ts

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
```

ngOnChanges have 3 Values =

1.current value:

2.firstchanges:

3.previous value:

## ngDoCheck()

when component any part change detected ten ngDoCheck() called or any render then ngDoCheck() call after ngOnChange()

```
constructor() {
    console.log('constructor call');
  }
  @Input() userinput: string = '';
  ngOnInit() {
    console.log('ngOnInit call');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call');
    //console.log(changes['userinput'].currentValue);
  }

  //ngDoCheck()

  ngDoCheck(){
    console.log("ngDoCheck Call");
  }
```

## ngAfterContentInit()

**parent.comp.html**

```
<app-child-ngonchange [userinput]="value">ngAfterContent</app-child-ngonchange>
```

**child.html**

```
<ng-content></ng-content>
```

**child.ts**

```
ngAfterContentInit(){
    console.log("ngAfterContentInit Call");
  
  }
```

This hook call only one time

#### Output of life Cycle Calling

```
constructor call
child-ngonchange.component.ts:18 ngOnChanges call
child-ngonchange.component.ts:14 ngOnInit call
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:30 ngAfterContentInit Call
core.mjs:26021 Angular is running in development mode.
2child-ngonchange.component.ts:25 ngDoCheck Call
```

#### After input init

```
ngOnChanges call
child-ngonchange.component.ts:25 ngDoCheck Call
```

## ngAfterContentChecked()

parent.html

```
<app-child-ngonchange [userinput]="value">ngAfterContent: {{value}}</app-child-ngonchange>
```

child.ts

```
  ngAfterContentChecked() {
    console.log(' ngAfterContentChecked called' );
  
  }
```

#### **output before any changes**

```
constructor call
child-ngonchange.component.ts:18 ngOnChanges call
child-ngonchange.component.ts:14 ngOnInit call
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:30 ngAfterContentInit Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
core.mjs:26021 Angular is running in development mode.
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
```

#### **output after changes**

```
ngOnChanges call
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
```

## ngAfterViewInit()

#### **output**

```
constructor call
child-ngonchange.component.ts:18 ngOnChanges call
child-ngonchange.component.ts:14 ngOnInit call
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:30 ngAfterContentInit Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
child-ngonchange.component.ts:40 ngAfterViewInit called

```

## ngAfterViewChecked()

#### output

```
constructor call
child-ngonchange.component.ts:18 ngOnChanges call
child-ngonchange.component.ts:14 ngOnInit call
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:30 ngAfterContentInit Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
child-ngonchange.component.ts:40 ngAfterViewInit called
child-ngonchange.component.ts:44 ngAfterViewchecked called
```

## ngOnDestroy()

***parent.html***

***create button destroy child component from DOM***

```
<button (click)="ngondestroy()" class="btn btn-danger">button</button>
```

***parent.ts***

```
//ngondestroy
  exits: boolean = true;
  ngondestroy(){
    this.exits=false;
  }
```

***child.ts***

```
 ngOnDestroy(){
    console.log("ngOnDestroy called");
  
  }
```

#### output before Calling

```
constructor call
child-ngonchange.component.ts:18 ngOnChanges call
child-ngonchange.component.ts:14 ngOnInit call
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:30 ngAfterContentInit Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
child-ngonchange.component.ts:40 ngAfterViewInit called
child-ngonchange.component.ts:44 ngAfterViewchecked called
core.mjs:26021 Angular is running in development mode.
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
child-ngonchange.component.ts:44 ngAfterViewchecked called
child-ngonchange.component.ts:25 ngDoCheck Call
child-ngonchange.component.ts:34  ngAfterContentChecked called
child-ngonchange.component.ts:44 ngAfterViewchecked called
```

#### output after calling

```

child-ngonchange.component.ts:49 
```

When you ***click** * button then ngOnDestroy() call and delete this ***child component** ***on DOM**
