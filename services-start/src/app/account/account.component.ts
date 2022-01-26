import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "../shared/services/accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [AccountService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.onStatusUpdate(this.id, status);
    console.log("A server status changed, new status: " + status);
  }
}
