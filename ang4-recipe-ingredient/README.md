# Ang4RecipeIngredient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


SK notes:

string interpolation: use {{ }} anything which returns string or converted to string.
property binding: [object]=
event binding:UI->typescript
(click)="methodname($event)",here $event sends the input event to the calling function for further actions.

two way binding
ex:
[(ngmodel)]=variableName
1.sets the variablename to the ui control.
2.sends the value typed in to the TS code variableName.

For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.
You then also need to add the import from @angular/forms  in the app.module.ts file:
import { FormsModule } from '@angular/forms';
