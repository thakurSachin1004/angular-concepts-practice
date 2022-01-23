import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2) {} // Angular will pass the element ref on which we have used this directive.

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elref.nativeElement,
      "background-color",
      "blue"
    );
    this.renderer.setStyle(this.elref.nativeElement, "color", "white");
    this.renderer.setStyle(this.elref.nativeElement, "padding", "20px");
  }
}
