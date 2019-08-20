import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../../services/logging.service";

@Component({
  selector: 'app-l105-new-account',
  templateUrl: './l105-new-account.component.html',
  styleUrls: ['./l105-new-account.component.css']
})
export class L105NewAccountComponent  {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

   /* const service = new LoggingService();
    service.logStatusChange(accountStatus);*/
  }
}
