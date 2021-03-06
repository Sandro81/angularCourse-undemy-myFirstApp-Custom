import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // Every time the input changes, we want to execute a method.
  // With 'set' we set a method (that is always a property)
  // the method has to share the name of the selector [appUnless]
  @Input() set appUnless(condition: boolean) {
    //Then we can check if the condition is true or not
    if (!condition) {
      // this create a view in this view container
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // If the condition is, in this case, true, we called the clear() method to remove everything from this place in the DOM
      this.vcRef.clear();
    }
  }

  // The template, where the directive is placed, can be enjected by adding TemplateRef
  // 'any' -> represent the generic type
  // The template is 'What?' the second question is 'Where?'
  // ViewContainerRef -> that marks the place where we placed this directory in the document
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
