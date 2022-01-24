import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2) {} // Angular will pass the element ref on which we have used this directive.

  @Input() defaultColor: string = "transparent";
  @Input() hoverColor: string = "yellow";

  // instead of Renderer using Host Binding to change properties of HTML elt. Here we need style property and to change background So we used style.background as property.
  @HostBinding("style.background") backgroundColor: string;
  @HostBinding("style.padding") padding: string = "20px";

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    // this.renderer.setStyle(this.elref.nativeElement, "padding", "20px");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") onHover(eventData: Event) {
    // using Renderer

    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "green"
    // );
    this.backgroundColor = this.hoverColor;
  }

  @HostListener("mouseleave") onMouseLeave(eventData: Event) {
    // using Renderer

    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
