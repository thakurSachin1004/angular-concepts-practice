import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"],
})
export class PageNotFoundComponent implements OnInit {
  errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.errorMsg = this.activatedRoute.snapshot.data["message"];

    this.activatedRoute.data.subscribe((data: Data) => {
      this.errorMsg = data["message"];
    });
  }
}
