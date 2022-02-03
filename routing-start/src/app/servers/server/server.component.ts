import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Params, Route, Router } from "@angular/router";

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
    // const id: string = this.activatedRoute.snapshot.params["id"];
    // this.server = this.serversService.getServer(Number(id));

    // // subscribing to params observable
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   const id: string = params["id"];
    //   this.server = this.serversService.getServer(Number(id));
    // });

    // using resolver

    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data["server"]; // server is name given in the route of Server Component in resolve object
    });
  }

  onEditServer() {
    this.route.navigate(["/servers", this.server.id, "edit"], {
      queryParamsHandling: "preserve",
    });
  }
}
