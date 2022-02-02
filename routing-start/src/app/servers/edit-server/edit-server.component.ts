import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEditServer = true;

  // will see how to Prefetch data before a component is rendered

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  toggleAllowEdit() {
    // this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
    //   this.allowEditServer = queryParams["allowEdit"] === 1 ? true : false;
    // });
    this.allowEditServer =
      +this.activatedRoute.snapshot.queryParams["allowEdit"] === 1
        ? true
        : false;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(Number(id));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.toggleAllowEdit();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
