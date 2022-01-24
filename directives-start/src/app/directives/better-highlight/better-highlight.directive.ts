import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2) {} // Angular will pass the element ref on which we have used this directive.

  // instead of Renderer using Host Binding to change properties of HTML elt. Here we need style property and to change background So we used style.background as property.
  @HostBinding("style.background") backgroundColor: string = "transparent";

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elref.nativeElement,
      "background-color",
      "transparent"
    );
    this.renderer.setStyle(this.elref.nativeElement, "padding", "20px");
  }

  @HostListener("mouseenter") onHover(eventData: Event) {
    // using Renderer

    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "green"
    // );
    this.backgroundColor = "green";
  }

  @HostListener("mouseleave") onMouseLeave(eventData: Event) {
    // using Renderer

    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = "transparent";
  }
}
