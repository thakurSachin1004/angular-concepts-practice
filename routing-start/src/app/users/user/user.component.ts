import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params["name"],
      id: this.route.snapshot.params["id"],
    };

    // params is a observable to which we have subscribed.
    this.route.params.subscribe((params: Params) => {
      this.user = {
        name: params["name"],
        id: params["id"],
      };
    });
  }
}
