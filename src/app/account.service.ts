import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Test Account",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  addAccount( name: string, status: string ) {
    this.accounts.push( {name, status} );
  }

  updateStatus(index: number, newStatus: string) {
    this.accounts[index].status = newStatus;
  }

  constructor() { }

}