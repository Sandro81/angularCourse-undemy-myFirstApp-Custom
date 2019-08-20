import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-l105-new-account',
  templateUrl: './l105-new-account.component.html',
  styleUrls: ['./l105-new-account.component.css']
})
export class L105NewAccountComponent  {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
