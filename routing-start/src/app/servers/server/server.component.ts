import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Route, Router } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    const id: string = this.activatedRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(Number(id));

    // subscribing to params observable
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: string = params["id"];
      this.server = this.serversService.getServer(Number(id));
    });
  }

  onEditServer() {
    this.route.navigate(["/servers", this.server.id, "edit"], {
      queryParamsHandling: "preserve",
    });
  }
}
