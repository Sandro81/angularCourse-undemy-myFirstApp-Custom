import { Component } from '@angular/core';
import { LoggingService } from "../../services/logging.service";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-l105-new-account',
  templateUrl: './l105-new-account.component.html',
  styleUrls: ['./l105-new-account.component.css']
})
export class L105NewAccountComponent  {

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);

  }
}
