import { Component } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  accounts = [  ];

  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  constructor(private acctService: AccountService) {
    //this.accounts = this.acctService.accounts;
    //dont do this here, do it in ngOnInit
  }

  ngOnInit() {
    this.accounts = this.acctService.accounts;
  }
}
