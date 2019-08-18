import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightHostlistenerBinding]'
})
export class HighlightHostlistenerBindingDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    // initialiaze the color
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
