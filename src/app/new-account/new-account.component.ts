import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../account.service";
import { LoggingService } from "./../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    //swap from output binding to dep inj
    this.acctService.addAccount(accountName, accountStatus);
    //console.log("A server status changed, new status: " + accountStatus);
    this.logService.logStatusChange(accountStatus);
  }

  constructor(private logService: LoggingService,
              private acctService: AccountService) {}
}
