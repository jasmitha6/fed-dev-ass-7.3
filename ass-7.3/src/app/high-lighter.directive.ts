import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
// defining directive for color chan
@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective {

  constructor(private el: ElementRef, private render: Renderer) {
    this.changecolor("black")
  }
  
  @HostListener('mouseenter', ['$event'])

  onMouseenter($event: any) {
    const value = $event.target.textContent;
    if (this.isOdd(value)) {
      this.changecolor("red")
    } else {
      this.changecolor("green")
    }
  }
// using hostlistener for changing the color.
  @HostListener('mouseout', ['$event'])
  onMouseout($event: any) {
    this.changecolor("black")
  }


  isOdd(num) {
    if (num % 2) return true
    else return false
  }

  private changecolor(color: string) {
    this.render.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
