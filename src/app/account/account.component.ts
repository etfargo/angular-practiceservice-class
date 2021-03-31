import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "../account.service";
import { LoggingService } from "./../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    this.acctService.updateStatus(this.id, status);
    //console.log("A server status changed, new status: " + status);
    this.logService.logStatusChange(status);
  }

  constructor(private logService: LoggingService,
              private acctService: AccountService) {}
}
