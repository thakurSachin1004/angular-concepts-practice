import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {} // Angular will pass the element ref on which we have used this directive.

  ngOnInit(): void {
    // not a good practice to directly accessing the html elt. Good way is using Renderer. Check better-highlight Directive for this.
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.elementRef.nativeElement.style.padding = "20px";
  }
}
