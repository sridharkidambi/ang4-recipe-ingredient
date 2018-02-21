Qucik Angularjs 2-5:

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



ng g c recipes/recipe-list --spec false  
angular augury for debugging the angularjs codebase.
view encapsulation:
feature to share css across the components.
By default the styles are specific to the component it is created with.
Localreference:holding the control as such in a local variable.
Eventemitter:
to emit some value frm the current component to the other component.

@viewchild :
a directive or decorator to get the template html reference to the typescript code.

<ng-content>:the directive component which helps hook dom elements defined in the component 
 consuming 

 Directives:
 1.built in structural and attribute types.
 2.custom directive
 3.@hostlistner --user events on webpage using rederer2
 4.Hostbinding -setting  values through variable properties in TS.
 5.Custom binding

 structural directive *ngif  can be replaced with ng-template with the propertybinding for ngif
  
  Services:

  providers and constructor inject ...regular typescript class.