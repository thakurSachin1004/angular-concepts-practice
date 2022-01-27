import { EventEmitter } from "@angular/core";

export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  statusUpdateEv = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
  }

  onStatusUpdate(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
