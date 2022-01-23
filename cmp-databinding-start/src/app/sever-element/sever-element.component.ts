import {
  AfterContentInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-sever-element",
  templateUrl: "./sever-element.component.html",
  styleUrls: ["./sever-element.component.css"],
})
export class SeverElementComponent
  implements OnInit, OnChanges, AfterContentInit
{
  @Input() element: { type: string; name: string; content: string };

  // @Input('srvElement') element: {type: string, name: string, content: string};
  //srvElement is an ALIAS given to element so that while binding this property outside use the alias name now not element

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
}
