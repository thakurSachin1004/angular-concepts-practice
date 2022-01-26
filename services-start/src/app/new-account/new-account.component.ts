import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../shared/services/accounts.service";
import { LoggingService } from "../shared/services/logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService, AccountService],
})
export class NewAccountComponent {
  constructor(
    private logStatus: LoggingService,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logStatus.logServerStatus(accountStatus);
  }
}
