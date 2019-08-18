import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightHostbinding]'
})
export class HighlightHostbindingDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'yellow';
  }

}
