import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // Every time the input changes, we want to execute a method.
  // With 'set' we set a method (that is always a property)
  @Input() set unless(condition: boolean) {
    //Then we can check if the condition is true or not
    if (!condition) {
      // this create a view in this view containor
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // The template, where the directive is placed, can be enjected by adding TemplateRef
  // 'any' -> represent the generic type
  // The template is 'What?' the second question is 'Where?'
  // ViewContainerRef -> that marks the place where we placed this directory in the document
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
