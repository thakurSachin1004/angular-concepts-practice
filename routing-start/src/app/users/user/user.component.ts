import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params["name"],
      id: this.route.snapshot.params["id"],
    };

    // params is a observable to which we have subscribed.
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        name: params["name"],
        id: params["id"],
      };
    });
  }

  ngOnDestroy(): void {
    // unsubscribing Observable. we don't have to do this because Angular will clean Observable automatically when comp is destroyed But if we have our own Observable then
    // we have to do this.
    this.paramsSubscription.unsubscribe();
  }
}
