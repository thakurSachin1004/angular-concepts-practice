import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { AuthGuardService } from "./services/auth-guard.service";
import { ServerResolver } from "./servers/server/server.reolver";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [
      { path: ":id/:name", component: UserComponent },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },
  {
    path: "servers",
    component: ServersComponent,
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver }, // the key is important here with this key only we will be getting the data from resolver in our component
      },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },
  {
    path: "not-found",
    component: PageNotFoundComponent,
    data: { message: "This page doesn't exist" }, // passing static data to component
  },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
